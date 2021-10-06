import React from 'react';
import ImageToggleOnMouseOver from '../src/ImageToggleOnMouseOver';

const ImageChangeOnMouseOver = () => {
    return (
        <div>
            <ImageToggleOnMouseOver
                primaryImg="/static/seattle/bw/PioneerSquareInSnow_BW.jpg"
                secondaryImg="/static/seattle/PioneerSquareInSnow.jpg"
                alt="Seattle Pioneer Square in snow"
            />
            &nbsp;&nbsp;&nbsp;
            <ImageToggleOnMouseOver
                primaryImg="/static/seattle/bw/ViewFromMyPlace_BW.jpg"
                secondaryImg="/static/seattle/ViewFromMyPlace.jpg"
                alt="View from my window"
            />
        </div>
    );
};

export default ImageChangeOnMouseOver;
