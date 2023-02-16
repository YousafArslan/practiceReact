import "./App.css";
import "antd/dist/antd.css";
import VideoTask from "./Components/VideoTask";
// import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { useRef } from "react";
import Demo from "./Demo";
import Cropper from "cropperjs";
import CropEasy from "./Components/crop/CropEasy";
import { useState } from "react";
import ParentComponent from "./Components/ParentComponent";
import MyComponent from "./Components/MyComponent";
import MyComponent1 from "./Components/MyComponent1";
// import Task1 from "./Components/task1";
// import Viewer from "./Components/task2 ";

function App() {
  // const [profilePicture, setProfilePicture] = useState(null);
  // const onChangeProfilePicture = (e) => {
  //   let file = e.target.files[0];
  //   if (file) {
  //     convertBase64(file).then((getValue) => {
  //       setProfilePicture([getValue]);
  //     });
  //   }
  // };
  // function convertBase64(file) {
  //   return new Promise((resolve, reject) => {
  //     const fileReader = new FileReader();
  //     fileReader.readAsDataURL(file);
  //     fileReader.onload = () => {
  //       resolve(fileReader.result);
  //     };
  //     fileReader.onerror = (error) => {
  //       reject(error);
  //     };
  //   });
  // }

  return (
    <div className="App">
      {/* <Task1 /> */}
      {/* <Viewer /> */}
      {/* <button
        type="button"
        className="upload_thumbnail_btn"
        name="profilePicture"
      >
        <input
          type="file"
          custom
          name="profilePicture"
          className="upload_thumbnail_input"
          bsCustomPrefix="form-file-input"
          id="upload-file"
          data-browse="UPLOAD"
          accept="image/*"
          onChange={(e) => {
            onChangeProfilePicture(e);
          }}
        />
        upload
      </button>
      {profilePicture && <CropEasy profilePicture={profilePicture} />} */}
      <MyComponent1 />
    </div>
  );
}

export default App;
