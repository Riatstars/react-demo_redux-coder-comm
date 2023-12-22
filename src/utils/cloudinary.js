import {
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_UPLOAD_PRESET,
} from "../app/config";
import axios from "axios";

const REACT_APP_CLOUDINARY_CLOUD_NAME = "dtrxwubwe";
const REACT_APP_CLOUDINARY_UPLOAD_PRESET = "coder_comm";
const REACT_APP_CLOUDINARY_API_KEY = "461127275773421";
const REACT_APP_CLOUDINARY_API_SECRET = "P2t87fwnG3or_UwdlP_-hT_qJY4";

export const cloudinaryUpload = async (image) => {
  if (!image) return "";
  const timestamp = Date.now();
  console.log(timestamp);
  try {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", REACT_APP_CLOUDINARY_UPLOAD_PRESET);
    formData.append("api_key", REACT_APP_CLOUDINARY_API_KEY);
    formData.append("timestamp", timestamp);
    const response = await axios({
      url: `https://api.cloudinary.com/v1_1/dtrxwubwe/image/upload`,
      method: "POST",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const imageUrl = response.data.secure_url;
    return imageUrl;
  } catch (error) {
    throw error;
  }
};
