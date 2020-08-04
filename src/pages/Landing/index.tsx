import React from 'react';

import logo from '../../assets/images/logo.svg';
import landing from '../../assets/images/landing.svg';

export default function Landing(){
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src = {logo} alt = "Proffy Logo"/>
                    <h2>Sua plataforma de estudos online.</h2>
                </div>

                <img src ={landing} alt ="Landing" className = "hero-image"/>
            </div>
        </div>
    );
}