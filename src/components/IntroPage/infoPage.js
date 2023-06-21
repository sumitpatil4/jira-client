import React from 'react';
import accoLogo from '../../Images/accolitedigital.png';
import './infoPage.css';
import { Button } from "@mui/material";
import jiraLogo from "../../Images/business-meeting.png"
import illustration from "../../Images/hero-illustration.png"

const FirstPage = () => {
    return (
        <div className="info-page">
            <div className='top-nav'>
                <div>
                    <img src={accoLogo} alt="accoliteLogo" className='logo' />
                </div>
                <div className='login-btn'>
                    <Button variant='contained' type="submit">Login</Button>
                </div>
            </div>
            <div className='second-bar'>
                <div className='second-bar-logo'>
                    <img src={jiraLogo} alt="jiraLogo" className='jira-img' />
                </div>
                <div className='second-bar-text'>
                    <h2>Jira Software</h2>
                </div>
                <div className='second-bar-options'>
                    <h3>Features</h3>
                </div>
            </div>
            <div className='inner-container'>
                <div className='innerContainer-text'>
                    <h1>Move fast, stay aigned</h1>
                    <h1>and build better - together</h1>
                    <h3>"Unleash the Potential of Agile with Jira Software"</h3>
                </div>

                <div className='innerContainer-image'>
                    <img src={illustration} alt="illustration" />
                </div>
            </div>

            <div className='feature-container'>
                <div className="featureHeading">
                    <h1>Features</h1>
                </div>
            </div>
        </div>
    )
}

export default FirstPage;