import React from 'react';

import backIcon from '../../assets/images/icons/back.svg';
import logo from '../../assets/images/logo.svg';

import { Link } from 'react-router-dom';

import './pageHeader.css';

interface PageHeaderProps {
    title: string;
}
const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="Voltar" />
                </Link>
                <img src={logo} alt="Logo Proffy" />
            </div>

            <div className="header-content">
                <strong>{props.title}</strong>
            </div>

        </header>
    );
}

export default PageHeader;