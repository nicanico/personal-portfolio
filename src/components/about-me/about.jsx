import React from "react";
import './about.css'

const About = () => {
    return(
        <div className="about">
            {/* left side */}
            <div className="sobre">
                <h2 className="titulo">Quem sou?</h2>
                <div className="linha"></div>
                <p className="sobre-mim"> 
                    Sou desenvolvedora junior na área de criação e manutenção 
                    de sites com conhecimento em design e prototipagem visando sempre a experiência do 
                    usuário e melhores soluções para facilitar e unir as pessoas através do mundo digital.
                </p>
                <p>
                    Procuro sempre inspiração em meus colegas de equipe e no mundo em que me rodeio, 
                    pois desenvolver algo é o <span className="frase">conjunto de arte e engenharia</span>.
                </p>
            </div>

            {/* right side */}
            <div className="soft-skills">
                <h2 className="titulo-soft">SOFT SKILLS</h2>
                <div className="icons">
                    
                </div>
            </div>
        </div>
    )
}

export default About