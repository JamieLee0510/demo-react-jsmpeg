import React, { useEffect, useState, useRef } from 'react';
import JSMpeg from '@cycjimmy/jsmpeg-player';

const JsmpegPlay02 = React.forwardRef((props, ref) => {
    const jsmpegDom = useRef();

    useEffect(() => {
        ref.current = new JSMpeg.VideoElement(jsmpegDom.current, props.videoUrl, props.options, props.overlayOptions);
    }, [props.options, props.overlayOptions, props.videoUrl, ref]);

    return <div className={props.wrapperClassName} ref={jsmpegDom}></div>;
});

export default JsmpegPlay02;
