import React, { useEffect } from 'react';
import axios from 'axios';

const GoogleLogin = ({ onLoginSuccess }) => {

    useEffect(() => {
        /* global google */
        setTimeout(() => {
            google.accounts.id.initialize({
                client_id: "367758440951-ki6q75a3g41tarn1opf34dgtuq0b3lc9.apps.googleusercontent.com",
                callback: handleLoginApi
            })
            google.accounts.id.renderButton(
                document.getElementById("LoginButton"),
                {
                    theme: "outline",
                    size: "large",
                })
        }, 500)
    }, [])

    const handleLoginApi = (response) => {
        console.log(response)

        axios.post(`http://localhost:4545/auth/login/userByGoogle`, {
            
            token: response.credential ,
        }).then((res) => {
            console.log(res.data);
            
        })
    };

    return (
        <div>
            <div id="LoginButton"/>
        </div>
    )
}
export default GoogleLogin;