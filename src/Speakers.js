import React, { useState, useEffect, useContext, useReducer } from 'react';
import Header from './Header';
import Menu from './Menu';
import SpeakerData from './SpeakerData';
import SpeakerDetail from './SpeakerDetail';
import { ConfigContext } from './App';
import speakersReducer from './reducers/SpeakersReducer';

export default function Speakers() {
    const [speakerList, dispatch] = useReducer(speakersReducer, []);
    const [isLoading, setIsLoading] = useState(true);

    const [speakingSaturday, setSpeakingSaturday] = useState(true);
    const [speakingSunday, setSpeakingSunday] = useState(true);

    const context = useContext(ConfigContext);

    useEffect(() => {
        setIsLoading(true);
        new Promise(function (resolve) {
            setTimeout(function () {
                resolve();
            }, 1000);
        }).then(() => {
            setIsLoading(false);
            const speakerListServerFilter = SpeakerData.filter(
                ({ sat, sun }) => {
                    return (speakingSaturday && sat) || (speakingSunday && sun);
                }
            );
            dispatch({ type: 'setSpeakerList', data: speakerListServerFilter });
        });
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
        dispatch({ type: favValue ? 'fave' : 'unfave', id: sessionId });
    };

    return isLoading ? (
        <div>Loading...</div>
    ) : (
        <div>
            <Header />
            <Menu />
            <div className="container">
                <div className="btn-toolbar margintopbottom5 checkbox-bigger">
                    {!context.showSpeakerSpeakingDays ? null : (
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
                    )}
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
