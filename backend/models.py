from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime
import uuid

class Frame(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    category: str  # "men", "women", "kids", "contact_lenses"
    price: float
    brand: Optional[str] = None
    image_url: str
    description: Optional[str] = None
    in_stock: bool = True
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class FrameCreate(BaseModel):
    name: str
    category: str
    price: float
    brand: Optional[str] = None
    image_url: str
    description: Optional[str] = None
    in_stock: bool = True

class FrameUpdate(BaseModel):
    name: Optional[str] = None
    category: Optional[str] = None
    price: Optional[float] = None
    brand: Optional[str] = None
    image_url: Optional[str] = None
    description: Optional[str] = None
    in_stock: Optional[bool] = None

class Admin(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    username: str
    password_hash: str
    created_at: datetime = Field(default_factory=datetime.utcnow)

class AdminLogin(BaseModel):
    username: str
    password: str

class AdminToken(BaseModel):
    access_token: str
    token_type: str = "bearer"
