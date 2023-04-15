

from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from keras.utils import img_to_array, load_img
import uvicorn
import numpy as np
from io import BytesIO
from PIL import Image
import tensorflow as tf

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

MODEL = tf.keras.models.load_model("../model/1/cotton_leaf_Disease.h5")

LEAF_OR_NOT_MODEL = tf.keras.models.load_model("../model/leafOrNotModel.h5")

CLASS_NAMES = ['Aphids', 'Army worm', 'Bacterial blight', 'Healthy', 'Powdery mildew', 'Target spot']

def load_img_from_array(image_array, target_size=(256,256)):
    img = Image.fromarray(image_array)
    img = img.resize(target_size)
    buf = BytesIO()
    img.save(buf, format='PNG')
    buf.seek(0)
    return buf

@app.get("/ping")
async def ping():
    return "Hello World"

def read_file_as_image(data) -> np.ndarray:
    image = np.array(Image.open(BytesIO(data)))
    return image

@app.post("/predict")
async def predict(
    file: UploadFile = File(...)
):
    
    image = read_file_as_image(await file.read())
    img_batch = np.expand_dims(image, 0)

    resized_input = tf.image.resize(img_batch, (256, 256))
    leaf_or_not_label = ["leaf", "not leaf"]
    leaf_or_not_prediction = LEAF_OR_NOT_MODEL.predict(resized_input)
    leaf_index = np.argmax(leaf_or_not_prediction[0])
    predicted_leaf = leaf_or_not_label[leaf_index]


    
    predictions = MODEL.predict(resized_input)
    index = np.argmax(predictions[0])
    predicted_class = CLASS_NAMES[index]
    confidence = np.max(predictions[0])
    return {
        'isLeaf': predicted_leaf,
        'class': predicted_class,
        'confidence': float(confidence),
        'index': int(index)
    }

if __name__ == "__main__":
    uvicorn.run(app, host='localhost', port=8000)

