import React from 'react';
import {useNavigate} from 'react-router-dom';

const Instructions = () => {

    const navigate = useNavigate();
    
    return (
        <div>
            <div className="ins-content">
                <div className="ins-content-title">
                    <h1 className="ins-title">Instrucciones</h1>
                </div>

                <span className="ins-bullets">
                    1.- Click en el botón empezar
                </span>
                <span className="ins-bullets">
                    2.- Selecciona la modlidad de capturas
                </span>
                <p className="ins-text">
                    - podrás seleccionar la cantidad de fotos que quieras tomar (máximo 7 fotos)
                </p>
                <span className="ins-bullets">
                    3.- Selecciona el intervalo de tiempo
                </span>
                <p className="ins-text">
                    - podrás configurar el intervalo de tiempo entre cada foto (máximo 7 segundos)
                </p>
                <span className="ins-bullets">
                    4.- ¡Espera la impresion de tus fotos!
                </span>
                <div className="ins-btn-content">
                    <button className="ins-button"
                        onClick={() => navigate(`/shots`)}>
                        ¡Empezar!
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Instructions;
