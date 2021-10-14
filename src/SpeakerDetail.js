import React from 'react';
import ImageToggleOnScroll from './ImageToggleOnScroll';
const SpeakerDetail = ({ speakerRec, onHeartFavoriteHandler }) => {
    const { id, firstName, lastName, favorite, bio } = speakerRec;
    console.log(id);
    return (
        <div className="card col-4 cardmin">
            <ImageToggleOnScroll
                className="card-img-top"
                primaryImg={`/static/speakers/bw/Speaker-${id}.jpg`}
                secondaryImg={`/static/speakers/Speaker-${id}.jpg`}
                alt={`${firstName} ${lastName}`}
            />

            <div className="card-body">
                <h4 className="card-title">
                    <button
                        className={
                            favorite ? 'heartredbutton' : 'heartdarkbutton'
                        }
                        onClick={(event) => {
                            onHeartFavoriteHandler(event, speakerRec);
                        }}
                    />
                    <span>
                        {firstName} {lastName}
                    </span>
                </h4>
                <span>{bio}</span>
            </div>
        </div>
    );
};

export default SpeakerDetail;
