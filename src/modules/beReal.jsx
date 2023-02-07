import React, { useState } from 'react';
import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import ImagePreview from './ImagePreview/index.jsx';
import { useParams } from 'react-router-dom';

export const BeRealPage = () => {
  let eventName = "EventName";
  const [environmentPhoto, setenvironmentPhoto] = useState('');
  const [facePhoto, setfacePhoto] = useState('');
  const [cameraState, setCameraState] = useState('');
  function handleTakeFacePhoto(dataUri) {
    console.log('takePhoto');
    setfacePhoto(dataUri);
    setCameraState(
      <Camera onTakePhotoAnimationDone={handleTakeEnvironmentPhoto}
        idealFacingMode={FACING_MODES.ENVIRONMENT}
        isFullscreen={isFullscreen}
        isImageMirror={false}
      />
    )
  }

  function handleTakeEnvironmentPhoto(dataUri) {
    console.log('takePhoto');
    setenvironmentPhoto(dataUri);
    setCameraState('');
  }


  function handlePhotoPreview() {
    setCameraState(
      <Camera onTakePhotoAnimationDone={handleTakeFacePhoto}
        idealFacingMode={FACING_MODES.USER}
        isFullscreen={isFullscreen}
        isImageMirror={true}
      />
    )
  }

  const isFullscreen = false;

  return (
    <main>
      <h1>Time to BeReal at {eventName}</h1>
      <button onClick={handlePhotoPreview}>BeReal</button>
      <div>
        <ImagePreview dataUri={facePhoto}
          isFullscreen={isFullscreen}
        />
        <ImagePreview dataUri={environmentPhoto}
          isFullscreen={isFullscreen}
        />
        {cameraState}
      </div>
      <form>
        <input type="submit"></input>
      </form>
    </main>
  )
}

export default BeRealPage;