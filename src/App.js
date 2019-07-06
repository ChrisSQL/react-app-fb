import React, { Component } from 'react';
import './App.css';

import FacebookLogin from 'react-facebook-login';

import GoogleLogin from 'react-google-login';

class App extends Component {

    render() {

        const responseFacebook = (response) => {
            console.log(response);
        }

        const responseGoogle = (response) => {
            console.log(response);
        }

        return (
            <div className="App">
                <h1>LOGIN WITH FACEBOOK AND GOOGLE</h1>

                <FacebookLogin
                    appId="2009920755997639" //APP ID NOT CREATED YET
                    fields="name,email,picture"
                    callback={responseFacebook}
                />
                <br />
                <br />


                <GoogleLogin
                    clientId="" //CLIENTID NOT CREATED YET
                    buttonText="LOGIN WITH GOOGLE"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                />

            </div>
        );
    }
}

export default App;
