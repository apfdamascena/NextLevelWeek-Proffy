import React from 'react';

import logo from '../../assets/images/logo.svg';
import landing from '../../assets/images/landing.svg';
import study from '../../assets/images/icons/study.svg';
import giveClasses from '../../assets/images/icons/give-classes.svg';
import purpleHeart from '../../assets/images/icons/purple-heart.svg';

import './landing.css';

export default function Landing(){
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src = {logo} alt = "Proffy Logo"/>
                    <h2>Sua plataforma de estudos online.</h2>
                </div>

                <img 
                    src ={landing} 
                    alt ="Landing" 
                    className = "hero-image"
                />

                <div className= "buttons-container">
                    <a href = "#" className= "study">
                        <img src = {study} alt = "Estudar"/>
                        Estudar
                    </a>

                    <a href = "#" className= "give-classes">
                        <img src = {giveClasses} alt = "Estudar"/>
                        Estudar
                    </a>
                </div>

                <span className = "total-connections">
                    Total de 200 conexões já realizadas <img src = {purpleHeart} alt = "purple heart" />
                </span>
            </div>
        </div>
    );
}