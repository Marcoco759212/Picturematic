import React, {useEffect, useRef} from 'react';

const Camera = () => {

    let videoRef = useRef(null);
 
    let photoRef = useRef(null);
   
    const getVideo = () => {
      navigator.mediaDevices
        .getUserMedia({
            video: true
        })
        .then((stream) => {
          let video = videoRef.current;
          video.srcObject = stream;
          video.play();
        })
        .catch((err) => {
          console.error(err);
        });
    }
   
    const takePicture = () => {
        // const width = 400;
        const width = 1200;
        // const height = width / (16 / 9);
        const height = width / (16 );
        let video = videoRef.current;
        let photo = photoRef.current;
        photo.width = width;
        photo.height = height;
        let ctx = photo.getContext('2d');
        ctx.drawImage(video, 0, 0, width, height);
    }
   
    const clearImage = () => {
        let photo = photoRef.current;
        let ctx = photo.getContext('2d');
        ctx.clearRect(0,0,photo.width,photo.height);
    }

    useEffect(() => {
        // return() => {
            console.log('start camera');
            getVideo();
        // }
    }, [videoRef]);

    return (
        <div className='camera-content'>
            <video ref={videoRef} 
                className="camera-image">
            </video>
            <button onClick={takePicture} 
                className="camera-btn">
            </button>
            {/* <canvas className="container" 
                ref={photoRef}>
            </canvas> */}
            {/* <button onClick={clearImage} 
                className="btn btn-primary container">
                Clear Image
            </button> */}
        </div>
    );
}

export default Camera;
