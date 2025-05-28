from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

app = FastAPI()

# Servir archivos estáticos
app.mount("/static", StaticFiles(directory="frontend"), name="static")

# Página principal (por ejemplo, /)
@app.get("/")
def read_index():
    return FileResponse("frontend/inicio.html")
