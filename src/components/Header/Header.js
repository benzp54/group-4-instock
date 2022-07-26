import React from 'react';
import './Header.scss';
import { Link } from "react-router-dom";
import logoOne from '../../assets/logo/InStock-Logo_1x.png';
import logoTwo from '../../assets/logo/InStock-Logo_2x.png';
import logoThree from '../../assets/logo/InStock-Logo.svg';

function Header(){
    return(
        <div className='header'>
            <img className='' src={logoOne}></img>
            <div className='header__heading'>
                <Link to={`/`}>
                    <div className='header__text'>Warehouses</div>
                </Link>
                <Link to={`/inventory`}>
                    <div className='header__text'>Inventory</div>
                </Link>
            </div>
        </div>
    )
}

export default Header;