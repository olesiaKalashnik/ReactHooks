import React, { useState, useEffect } from 'react';
import Header from './Header';
import Menu from './Menu';
import SpeakerData from './SpeakerData';
import SpeakerDetail from './SpeakerDetail';

export default function Speakers() {
    const [speakerList, setSpeakerList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [speakingSaturday, setSpeakingSaturday] = useState(true);
    const [speakingSunday, setSpeakingSunday] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        new Promise(function (resolve) {
            setTimeout(function () {
                resolve();
            }, 1000);
        }).then(() => {
            setIsLoading(false);
        });
        setSpeakerList(SpeakerData);
        return () => console.log('cleanup');
    }, []);

    const handleChangeSunday = () => {
        setSpeakingSunday(!speakingSunday);
    };

    const handleChangeSaturday = () => {
        setSpeakingSaturday(!speakingSaturday);
    };

    const speakerListFiltered = isLoading
        ? []
        : speakerList
              .filter(
                  ({ sat, sun }) =>
                      (speakingSaturday && sat) || (speakingSunday && sun)
              )
              .sort((a, b) =>
                  a.firstName < b.firstName
                      ? -1
                      : a.firstName > b.firstName
                      ? 1
                      : 0
              );

    const heartFavoriteHandler = (event, favValue) => {
        event.preventDefault();
        const sessionId = parseInt(
            event.target.attributes['data-sessionid'].value
        );
        setSpeakerList(
            speakerList.map((speaker) => {
                if (speaker.id === sessionId) {
                    speaker.favorite = favValue;
                    return speaker;
                }
                return speaker;
            })
        );
    };

    return isLoading ? (
        <div>Loading...</div>
    ) : (
        <div>
            <Header />
            <Menu />
            <div className="container">
                <div className="btn-toolbar margintopbottom5 checkbox-bigger">
                    <div className="hide">
                        <div className="form-check-inline">
                            <label className="form-check-label">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    onChange={handleChangeSaturday}
                                    checked={speakingSaturday}
                                />
                                Saturday Speakers
                            </label>
                        </div>
                        <div className="form-check-inline">
                            <label className="form-check-label">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    onChange={handleChangeSunday}
                                    checked={speakingSunday}
                                />
                                Sunday Speakers
                            </label>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="card-deck">
                        {speakerListFiltered.map(
                            ({ id, firstName, lastName, bio, favorite }) => {
                                return (
                                    <SpeakerDetail
                                        key={id}
                                        id={id}
                                        firstName={firstName}
                                        lastName={lastName}
                                        favorite={favorite}
                                        bio={bio}
                                        onHeartFavoriteHandler={
                                            heartFavoriteHandler
                                        }
                                    />
                                );
                            }
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
