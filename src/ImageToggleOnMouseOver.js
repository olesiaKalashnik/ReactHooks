import React, { useRef } from 'react';

const ImageToggleOnMouseOver = ({ primaryImg, secondaryImg }) => {
    const imageRef = useRef(null);
    return (
        <img
            ref={imageRef}
            src={primaryImg}
            alt=""
            style={{ width: '900px', height: '725px' }}
            onMouseOver={() => {
                imageRef.current.src = secondaryImg;
            }}
            onMouseOut={() => {
                imageRef.current.src = primaryImg;
            }}
        />
    );
};

export default ImageToggleOnMouseOver;
