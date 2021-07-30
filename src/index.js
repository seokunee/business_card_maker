import React, { memo } from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./app.jsx";
import AuthService from "./service/auth_service";
import ImageUploader from "./service/image_uploader";
import ProfileImageInput from "./components/profile_image_input/profile_image_input";
import CardRepository from "./service/card_repository";

const authService = new AuthService();
const imageUploader = new ImageUploader();
const cardRepository = new CardRepository();

const FileUploader = memo((props) => {
  return <ProfileImageInput {...props} imageUploader={imageUploader} />;
});

ReactDOM.render(
  <React.StrictMode>
    <App
      authService={authService}
      FileUploader={FileUploader}
      cardRepository={cardRepository}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
