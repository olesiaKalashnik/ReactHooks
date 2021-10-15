import React, { useContext } from 'react';
import { GlobalContext } from './GlobalState';
import EmailValidatingForm from './EmailValidatingForm';
import SignMeUp from './SignMeUp';

export default function Header() {
    const signupCallback = (email) => {
        console.log(`sign up called with email ${email}`);
    };

    const { favoriteClickCount } = useContext(GlobalContext);

    return (
        <div className="jumbotron jumbotronheight">
            <div className="row">
                <div className="col-12 col-sm-4 text-center">
                    <h6 className="text-uppercase">October 19-20 2019</h6>
                    <h6 className="text-uppercase">San Jose, California</h6>
                    <h5>{favoriteClickCount}</h5>
                </div>
                <div className="col-12 col-sm-8 text-lg-right">
                    <div>
                        <img src="/static/SVCClogo.png" />
                    </div>
                    <h2>Silicon Valley Code Camp</h2>
                    <div className="row col-12 text-lg-right">
                        {/* <SignMeUp signupCallback={signupCallback} /> */}
                        <EmailValidatingForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
