import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const TimeInterval = () => {

    const navigate = useNavigate();

    const arrayInterval = [3, 5, 7, 10];
    
    const [position, setPosition] = useState(0);

    const addInterval = () => {
        if(position >= 3){
            setPosition(3)
        }else{
            setPosition(position + 1)
        }
    }

    const resInterval = () => {
        if(position <= 0){
            setPosition(0)
        }else{
            setPosition(position - 1)
        }
    }

    console.log(position);
    
    return (
        <div>
            <div className="time-content">
                <h1 className="time-title">Temporizador</h1>
                <p className="time-text">
                    Puedes seleccionar el intervalo del temporizador entre cada foto (máximo 10 segundos)
                </p>
                <div className='time-selection'>
                    <button onClick={resInterval}
                        className='time-res'>
                        {'<'}
                    </button>
                    <div className='time-num'>
                        {arrayInterval[position]}
                    </div>
                    <button onClick={addInterval}
                        className='time-add'>
                        {'>'}
                    </button>
                </div>
                <div className='time-btn-content'>
                    <button className="time-btn"
                        onClick={() => navigate(`/camera`)}>
                        Continuar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TimeInterval;
