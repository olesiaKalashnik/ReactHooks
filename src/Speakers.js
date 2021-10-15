import React, { useState, useContext, useCallback, useMemo } from 'react';
import Header from './Header';
import Menu from './Menu';
import SpeakerDetail from './SpeakerDetail';
import { ConfigContext } from './App';
import { GlobalContext} from './GlobalState';

export default function Speakers() {
    const [speakingSaturday, setSpeakingSaturday] = useState(true);
    const [speakingSunday, setSpeakingSunday] = useState(true);

    const context = useContext(ConfigContext);
    const globalContext = useContext(GlobalContext);

    const { speakerList, isLoading, toggleSpeakerFavorite } = globalContext;
    const handleChangeSunday = () => {
        setSpeakingSunday(!speakingSunday);
    };

    const handleChangeSaturday = () => {
        setSpeakingSaturday(!speakingSaturday);
    };

    const filteredAndSortedSpeakerList = useMemo(
        () =>
            speakerList
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
                ),
        [speakerList, speakingSunday, speakingSaturday]
    );

    const speakerListFiltered = isLoading ? [] : filteredAndSortedSpeakerList;

    const heartFavoriteHandler = useCallback((event, speakerRec) => {
        event.preventDefault();
        toggleSpeakerFavorite(speakerRec);
    }, []);

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
                        {speakerListFiltered.map((speakerRec) => {
                            return (
                                <SpeakerDetail
                                    key={speakerRec.id}
                                    speakerRec={speakerRec}
                                    onHeartFavoriteHandler={
                                        heartFavoriteHandler
                                    }
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
