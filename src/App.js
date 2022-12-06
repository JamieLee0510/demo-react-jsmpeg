import React, { useRef } from 'react';
import './App.css';

import JsmpegPlayer from './components/JsmpegPlayer';

const videoOptions = {
    poster: 'https://cycjimmy.github.io/staticFiles/images/screenshot/big_buck_bunny_640x360.jpg',
    autoplay: true,
      loop: true,
      progressive: false,// chunk or not
      control: false,
      preserveDrawingBuffer: true,
      decodeFirstFrame: true,
      disableGl: true,
};

const videoOverlayOptions = {
    audio: true, //mute or not
};

function App() {
    const jsmpegPlayer = useRef();

    return (
        <div className="App">
            <header className="App-header">
                <JsmpegPlayer
                    wrapperClassName="video-wrapper"
                    videoUrl="https://cycjimmy.github.io/staticFiles/media/big_buck_bunny_640x360.ts"
                    options={videoOptions}
                    overlayOptions={videoOverlayOptions}
                    ref={jsmpegPlayer}
                />
                <div className="buttons-wrapper">
                    <button onClick={() => jsmpegPlayer.current.play()}>Play</button>
                    <button onClick={() => jsmpegPlayer.current.pause()}>Pause</button>
                    <button onClick={() => jsmpegPlayer.current.stop()}>Stop</button>
                </div>
            </header>
        </div>
    );
}

export default App;
