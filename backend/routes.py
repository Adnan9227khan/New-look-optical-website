from fastapi import APIRouter, HTTPException, Depends, UploadFile, File
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from models import Frame, FrameCreate, FrameUpdate, AdminLogin, AdminToken
from motor.motor_asyncio import AsyncIOMotorClient
from datetime import datetime, timedelta
from passlib.context import CryptContext
import jwt
import os
from typing import List, Optional

router = APIRouter(prefix="/api")

# JWT Configuration
SECRET_KEY = os.getenv("JWT_SECRET_KEY", "your-secret-key-change-this-in-production")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 60 * 24  # 24 hours

# Password hashing
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
security = HTTPBearer()

# Database connection (imported from server.py)
def get_db():
    from server import db
    return db

# Helper functions
def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password):
    return pwd_context.hash(password)

def create_access_token(data: dict):
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

async def verify_token(credentials: HTTPAuthorizationCredentials = Depends(security)):
    token = credentials.credentials
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            raise HTTPException(status_code=401, detail="Invalid authentication credentials")
        return username
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token has expired")
    except jwt.JWTError:
        raise HTTPException(status_code=401, detail="Could not validate credentials")

# Admin Authentication Routes
@router.post("/admin/login", response_model=AdminToken)
async def admin_login(login_data: AdminLogin):
    db = get_db()
    admin = await db.admins.find_one({"username": login_data.username})
    
    if not admin or not verify_password(login_data.password, admin["password_hash"]):
        raise HTTPException(status_code=401, detail="Incorrect username or password")
    
    access_token = create_access_token(data={"sub": admin["username"]})
    return {"access_token": access_token, "token_type": "bearer"}

@router.post("/admin/create-admin")
async def create_admin(username: str, password: str):
    """One-time route to create admin user. Remove after first use."""
    db = get_db()
    
    # Check if admin already exists
    existing = await db.admins.find_one({"username": username})
    if existing:
        raise HTTPException(status_code=400, detail="Admin already exists")
    
    admin_data = {
        "username": username,
        "password_hash": get_password_hash(password),
        "created_at": datetime.utcnow()
    }
    
    await db.admins.insert_one(admin_data)
    return {"message": "Admin created successfully"}

# Public Frame Routes
@router.get("/frames", response_model=List[Frame])
async def get_frames(category: Optional[str] = None, in_stock: Optional[bool] = None):
    db = get_db()
    query = {}
    
    if category:
        query["category"] = category
    if in_stock is not None:
        query["in_stock"] = in_stock
    
    frames = await db.frames.find(query).sort("created_at", -1).to_list(1000)
    return [Frame(**frame) for frame in frames]

@router.get("/frames/{frame_id}", response_model=Frame)
async def get_frame(frame_id: str):
    db = get_db()
    frame = await db.frames.find_one({"id": frame_id})
    
    if not frame:
        raise HTTPException(status_code=404, detail="Frame not found")
    
    return Frame(**frame)

# Admin-only Frame Management Routes
@router.post("/admin/frames", response_model=Frame)
async def create_frame(frame_data: FrameCreate, username: str = Depends(verify_token)):
    db = get_db()
    
    frame = Frame(**frame_data.dict())
    await db.frames.insert_one(frame.dict())
    
    return frame

@router.put("/admin/frames/{frame_id}", response_model=Frame)
async def update_frame(frame_id: str, frame_data: FrameUpdate, username: str = Depends(verify_token)):
    db = get_db()
    
    frame = await db.frames.find_one({"id": frame_id})
    if not frame:
        raise HTTPException(status_code=404, detail="Frame not found")
    
    update_data = {k: v for k, v in frame_data.dict().items() if v is not None}
    update_data["updated_at"] = datetime.utcnow()
    
    await db.frames.update_one({"id": frame_id}, {"$set": update_data})
    
    updated_frame = await db.frames.find_one({"id": frame_id})
    return Frame(**updated_frame)

@router.delete("/admin/frames/{frame_id}")
async def delete_frame(frame_id: str, username: str = Depends(verify_token)):
    db = get_db()
    
    result = await db.frames.delete_one({"id": frame_id})
    
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Frame not found")
    
    return {"message": "Frame deleted successfully"}

@router.post("/admin/upload-image")
async def upload_image(file: UploadFile = File(...), username: str = Depends(verify_token)):
    """Upload image and return URL"""
    # For now, we'll use external image URLs
    # In production, you'd upload to cloud storage (S3, Cloudinary, etc.)
    
    if not file.content_type.startswith("image/"):
        raise HTTPException(status_code=400, detail="File must be an image")
    
    # For MVP, return a placeholder message
    # In production, implement actual file upload
    return {
        "message": "For now, please use image URLs from Unsplash or Pexels",
        "example": "https://images.unsplash.com/photo-xxx"
    }
