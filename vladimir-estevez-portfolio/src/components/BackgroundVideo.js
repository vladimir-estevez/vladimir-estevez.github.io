import React from 'react';
import backgroundVideo from '../images/background.mp4';

const BackgroundVideo = () => {
  return (
    <div className="video-background" style={{ pointerEvents: 'none' }}>
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        disablePictureInPicture
        disableRemotePlayback
        style={{ pointerEvents: 'none' }}
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;