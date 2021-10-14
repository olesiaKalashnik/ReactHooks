import React from 'react';

import useEmailValidation from '../src/util/useEmailValidation';
import usePhoneNumberValidator from '../src/util/usePhoneNumberFormatter';

function EmailValidatingForm() {
    const { setEmail, email, setCount, count, emailValid } =
        useEmailValidation(30);

    const { phoneNumber, setPhoneNumber } = usePhoneNumberValidator();

    return (
        <div className="container">
            <br />
            <div>
                <div className="content">
                    <input
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        type="tel"
                        pattern="[0-9]{3} [0-9]{2}-[0-9]{3}"
                        value={phoneNumber}
                    />
                    &nbsp;&nbsp;&nbsp;
                </div>
                &nbsp;&nbsp;&nbsp;
                <div className="content">
                    <input
                        type="email"
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }}
                        disabled={count <= 0}
                        value={email}
                        placeholder="Emter email"
                        name="emailInput"
                        required
                    />
                    &nbsp;&nbsp;&nbsp;
                    <button
                        disabled={!emailValid || count <= 0}
                        onClick={() => {
                            setCount(0);
                            alert(`button clicked with email ${email}`);
                        }}
                        className="btn-lg"
                        type="submit"
                    >
                        Press Me!
                    </button>
                    <div>
                        {count > 0
                            ? `You have ${count} seconds to enter your email`
                            : `Email entered or time expired`}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmailValidatingForm;
