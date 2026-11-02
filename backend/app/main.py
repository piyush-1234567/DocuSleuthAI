from fastapi import FastAPI
from app.database import engine
from app.models.user import User
from app.database import Base, engine


Base.metadata.create_all(bind=engine)
app = FastAPI(title="DocuSleuth AI API")

@app.get("/")
def home():
    return {"message": "DocuSleuth AI Backend is running!"}

@app.get("/db-test")
def test_db():
    try:
        with engine.connect():
            return {"message": "Database connected successfully!"}
    except Exception as e:
        return {"error": str(e)}