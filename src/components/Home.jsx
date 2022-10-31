import React from 'react';
import {useNavigate} from 'react-router-dom';


const Home = () => {

    const navigate = useNavigate();

    return (
        <div className='home-content'>
            <div className='home-title-content'>
                <h1 className="home-title">Picturematic</h1>
            </div>
            <h2 className="home-text">
                Bienvenido a la cabina de 
                picturematic
            </h2>
            <button className="home-btn-comenzar"
                onClick={() => navigate(`/instructions`)}>
                {'Comenzar ->'}
            </button>
        </div>
    );
}

export default Home;
