import React from 'react';

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '419741909033-2pgcuq8m837pas3rhldh31v5vskgc0pn.apps.googleusercontent.com',
                scope: 'email'
            });
        });
    };

    render(){
        return <div>Google Auth</div>;
    };
};

export default GoogleAuth;