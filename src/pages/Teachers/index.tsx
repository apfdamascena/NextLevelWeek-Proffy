import React from 'react';
import { Link } from 'react-router-dom';

import './teachers.css';

import backIcon from '../../assets/images/icons/back.svg';
import logo from '../../assets/images/logo.svg';

export default function Teachers() {
    return (
        <div id="page-teacher-list" className = "container">
            <header className = "page-header">
                <div className = "top-bar-container">
                    <Link to = "/">
                        <img src = {backIcon} alt = "Voltar"/> 
                    </Link>
                    <img src = {logo} alt = "Logo Proffy"/>
                </div>

                <div className = "header-content">
                    <strong>Estes são os proffys disponíveis.</strong>
                </div>

            </header>
        </div>
    );
}