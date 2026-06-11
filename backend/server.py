from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List
import uuid
from datetime import datetime, timezone

# Load env file
ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / ".env")

# MongoDB connection
mongo_url = os.environ.get("MONGO_URL")
db_name = os.environ.get("DB_NAME")

client = AsyncIOMotorClient(mongo_url)
db = client[db_name]

# FastAPI app
app = FastAPI()

# API router
api_router = APIRouter(prefix="/api")


# ---------------- MODELS ----------------
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


# ---------------- ROUTES ----------------
@api_router.get("/")
async def root():
    return {"message": "New Look Opticals API"}


# Import backend routes
from routes import router as frames_router
app.include_router(frames_router)
app.include_router(api_router)


# ---------------- CORS FIX ----------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://newlookoptical.netlify.app",
        "http://localhost:3000"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ---------------- LOGGING ----------------
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s"
)

logger = logging.getLogger(__name__)


# ---------------- SHUTDOWN ----------------
@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
