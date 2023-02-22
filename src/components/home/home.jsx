import React from "react";
import './home.css';
import Icon from '../../img/icon-principal.png';

const Home = () =>{
    return(
        <div className="home">
            <div className="h-left">
                <img src={Icon} alt="" />
            </div>
            <div className="h-right">
                <div className="apresentation">
                    <span className="h-name">Olá! Sou Nicole</span>
                    <p className="h-profession">&#60;Desevolvedora <span className="full">full-stack &#8260;&#62;</span></p>
                </div>
                <div className="h-contacts">
                    <button className="button h-contact">contact</button>
                    <a href="https://github.com/nicanico" className="social-item">
                        <i class="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/nicole-souza-santos-853b3a25b/" className="social-item">
                        <i class="fab fa-linkedin"></i>
                    </a>
                </div>
                <span className="console">console.log&#40;<span className="hello">'Hello Word'</span>&#41;</span>
                
            </div>
        </div>
    )
}

export default Home