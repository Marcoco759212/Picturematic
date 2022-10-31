import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const Shots = () => {
    const navigate = useNavigate();

    const [numPhotos, setNumPhotos] = useState(1);

    const addPhoto = () => {
        if(numPhotos >= 7){
            setNumPhotos(7)
        }else{
            setNumPhotos(numPhotos + 1)
        }
    }

    const resPhoto = () => {
        if(numPhotos <= 1){
            setNumPhotos(1)
        }else{
            setNumPhotos(numPhotos - 1)
        }
    }

    return (
        <div>
            <div className="shots-content">
                <h1 className="shots-title">No. de fotos</h1>
                <p className="shots-text">
                    Puedes seleccionar el número de fotos que quieras para esta sesión (máximo 7 fotos)
                </p>
                <div className='shots-selection'>
                    <button onClick={resPhoto}
                        className='shots-res'>
                        {'<'}
                    </button>
                    <div className='shots-num'>
                        {numPhotos}
                    </div>
                    <button onClick={addPhoto} 
                        className='shots-add'>
                        {'>'}
                    </button>
                </div>
                <div className='shots-btn-content'>
                    <button className="shots-btn"
                        onClick={() => navigate(`/time`)}>
                        Continuar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Shots;
