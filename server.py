from fastapi import FastAPI, Request
from llama_cpp import Llama
from huggingface_hub import hf_hub_download
import os
import requests

os.system("ulimit -l unlimited")

app = FastAPI()

hf_hub_download("TheBloke/deepseek-coder-1.3b-base-GGUF", "deepseek-coder-1.3b-base.Q5_K_M.gguf", local_dir="./")

model_l = Llama(model_path="./deepseek-coder-1.3b-base.Q5_K_M.gguf", n_ctx=16192, n_gpu_layers=0, n_threads=2, use_mlock=True)

@app.post("/api")
async def completion(request: Request):
    try:
        data = await request.json()
        prompt = data["prompt"]

        res = model_l(
            prompt,
            temperature=0.6,
            echo=False,
            max_tokens=64,
        )
        return {"responses": res["choices"]}
    except:
        return {"responses": "Error!"}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=7860)
