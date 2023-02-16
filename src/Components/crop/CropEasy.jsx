import React from "react";
import {
  Button,
  DialogActions,
  DialogContent,
  Slider,
  Typography,
} from "@mui/material";
import Cropper from "react-easy-crop";
import { Box } from "@mui/system";
import { Cancel, Crop } from "@mui/icons-material";
// import { CropIcon } from "@mui/icons-material/Crop";
import { useState } from "react";
import getCroppedImg from "./cropImage";

function CropEasy({ setOpenCrop, setPhotoUrl, SetFile, profilePicture }) {
  console.log(profilePicture);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [croppedAreasPixels, setCroppedAreasPixels] = useState(null);
  const cropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedAreasPixels(croppedAreaPixels);
  };
  const cropImage = async () => {
    try {
      const { file, url } = await getCroppedImg(
        // photoUrl,
        "https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg",
        croppedAreasPixels,
        rotation
      );
      // setPhotoUrl(url )
      // SetFile(file)
      debugger;
      console.log(file, url);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <DialogContent
        dividers
        sx={{
          background: "#333",
          position: "relative",
          height: 400,
          width: "auto",
          minWidth: { sm: 500 },
        }}
      >
        <Cropper
          image={profilePicture}
          crop={crop}
          zoom={zoom}
          rotation={rotation}
          aspect={1}
          onZoomChange={setZoom}
          onRotationChange={setRotation}
          onCropChange={setCrop}
          onCropComplete={cropComplete}
        />
      </DialogContent>
      <DialogActions sx={{ flexDirection: "column", mx: 3, my: 2 }}>
        <Box sx={{ width: "100%", mb: 1 }}>
          <Box>
            <Typography>Zoom: {zoomPercent(zoom)} </Typography>{" "}
            <Slider
              valueLabelDisplay="auto"
              valueLabelFormat={zoomPercent}
              min={1}
              max={3}
              step={0.1}
              value={zoom}
              onChange={(e, zoom) => setZoom(zoom)}
            />
          </Box>
          <Box>
            <Typography>Rotation: {rotation} </Typography>{" "}
            <Slider
              valueLabelDisplay="auto"
              min={0}
              max={360}
              value={rotation}
              onChange={(e, zoom) => setRotation(zoom)}
            />
          </Box>
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            <Button
              variant="outlined"
              startIcon={<Cancel />}
              onClick={() => setOpenCrop(false)}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              startIcon={<Crop />}
              onClick={cropImage}
            >
              Crop
            </Button>
          </Box>
        </Box>
      </DialogActions>
    </>
  );
}

export default CropEasy;

const zoomPercent = (value) => {
  return `${Math.round(value * 100)}`;
};
