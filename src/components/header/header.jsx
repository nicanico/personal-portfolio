import React from "react";
import './header.css';

const Header = () => {
    return(
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">
                    <span>&#123;</span>
                    <p>nicole</p>
                    <span>&#125;</span>
                </div>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul>
                        <li><a href="#home">home</a></li>
                        <li><a href="#about">sobre mim</a></li>
                        <li><a href="#">skills e formação</a></li>
                        <li><a href="#">projetos</a></li>
                        <li><a href="#">contato</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header