import React, { useContext } from 'react';
import { GlobalContext } from './GlobalState';
import ImageToggleOnScroll from './ImageToggleOnScroll';
const SpeakerDetail = React.memo(({ speakerRec, onHeartFavoriteHandler }) => {
    const { id, firstName, lastName, favorite, bio } = speakerRec;

    const { incrementFavoriteClickCount } = useContext(GlobalContext);
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
                            incrementFavoriteClickCount();
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
});

export default SpeakerDetail;
