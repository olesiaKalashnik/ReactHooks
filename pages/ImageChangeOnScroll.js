import React from 'react';
import ImageToggleOnScroll from '../src/ImageToggleOnScroll';

const ImageChangeOnScroll = () => {
    return (
        <div>
            <ImageToggleOnScroll
                primaryImg="/static/seattle/bw/PioneerSquareInSnow_BW.jpg"
                secondaryImg="/static/seattle/PioneerSquareInSnow.jpg"
            />
            &nbsp;&nbsp;&nbsp;
            <ImageToggleOnScroll
                primaryImg="/static/seattle/bw/ViewFromMyPlace_BW.jpg"
                secondaryImg="/static/seattle/ViewFromMyPlace.jpg"
            />
        </div>
    );
};

export default ImageChangeOnScroll;
