import './Rules.css';
import './App.css';
import './styles/HomeStyle.scss';
import './styles/InstructionsStyle.scss'
import './styles/ShotsStyle.scss'
import './styles/TimeIntervalStyle.scss'
import './styles/CameraStyle.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import InstructionsPage from './pages/InstructionsPage';
import ShotsPage from './pages/ShotsPage';
import TimeIntervalPage from './pages/TimeIntervalPage';
import CameraPage from './pages/CameraPage';
import Curves1 from './Images/curves1.svg'
import Curves2 from './Images/curves2.svg'
import Curves3 from './Images/curves3.svg'
import Curves4 from './Images/curves4.svg'
import Curves5 from './Images/curves5.svg'


function App() {
  return (
    <main className="App">
        <div>
            <img className='app-curve1'
                src={Curves1}
                alt=''/>
        </div>
        <div>
            <span className='app-complement2'></span>
            <img className='app-curve2'
                src={Curves2}
                alt=''/>
            </div>
        <div>
            <span className='app-complement3'></span>
            <img className='app-curve3'
                src={Curves3}
                alt=''/>
            </div>
        <div>
            <span className='app-complement4'></span>
            <img className='app-curve4'
                src={Curves4}
                alt=''/>
            </div>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route exact path='/' element={<HomePage/>} />
                <Route exact path='/instructions' element={<InstructionsPage/>} />
                <Route exact path='/shots' element={<ShotsPage/>} />
                <Route exact path='/time' element={<TimeIntervalPage/>} />
                <Route exact path='/camera' element={<CameraPage/>} />
                <Route path='*' element={<NotFoundPage/>} />
            </Routes>
        </BrowserRouter>
        <img className='app-curve5'
                src={Curves5}
                alt=''
                />
    </main>
  );
}

export default App;
