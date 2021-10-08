import React, { useState, useContext } from 'react';
import { ConfigContext } from './App';

export default function SignMeUp({ signupCallback }) {
    const [email, setEmail] = useState('');

    const context = useContext(ConfigContext);

    return !context.showSignMeUp ? null : (
        <div className="container">
            <div>
                <div className="content">
                    <input
                        placeholder="Enter Email"
                        type="email"
                        name="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    &nbsp;
                    <button
                        className="btn"
                        type="submit"
                        disabled={email.includes('@')}
                        onClick={() => {
                            signupCallback(email);
                            setEmail('');
                            alert('Signup confirmed');
                        }}
                    >
                        Get Updates
                    </button>
                </div>
            </div>
        </div>
    );
}
