import React from 'react';
import { useHistory } from "react-router-dom";
import '../styles/Header.scss';

function Header() {
    const history = useHistory()
    return(
        <div className="header-wrapper">
            <h1 className = "jenn-header">Jenn Ballard</h1>
            <button className = "hp-btn" onClick={() => {history.goBack()}}>HomePage</button>
        </div>
    )
}
export default Header;
