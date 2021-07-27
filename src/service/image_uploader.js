const url = process.env.REACT_APP_CLOUDINARY_UPLOAD_URL;
const preset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;

class ImageUploader {
  upload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", `${preset}`);

    const result = await fetch(`${url}`, {
      method: "POST",
      body: formData,
    });
    const response = await result.json();
    return response;
  };
}

export default ImageUploader;
