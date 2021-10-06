import React, { useState } from 'react';

const InputElement = () => {
    const [inputText, setInputText] = useState('');
    const [historyList, setHistoryList] = useState([]);

    return (
        <div>
            <input
                type="text"
                placeholder="Enter text"
                onChange={(event) => {
                    const newVal = event.target.value;
                    setInputText(newVal);
                    setHistoryList((prevHistory) => [...prevHistory, newVal]);
                }}
            />
            <br />
            {inputText}
            <hr />
            <br />
            <ul>
                {historyList.map((i) => {
                    return <li key="">{i}</li>;
                })}
            </ul>
        </div>
    );
};

export default InputElement;
