import React from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./app.jsx";
import AuthService from "./sevice/auth_service";
import ImageUploader from "./sevice/image_uploader";
import ProfileImageInput from "./components/profile_image_input/profile_image_input";

const authService = new AuthService();
const imageUploader = new ImageUploader();

const FileUploader = (props) => {
  return <ProfileImageInput {...props} imageUploader={imageUploader} />;
};

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} FileUploader={FileUploader} />
  </React.StrictMode>,
  document.getElementById("root")
);
