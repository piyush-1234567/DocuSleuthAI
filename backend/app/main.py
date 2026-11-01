from fastapi import FastAPI

app = FastAPI(title="DocuSleuth AI API")

@app.get("/")
def home():
    return {"message": "DocuSleuth AI Backend is running!"}