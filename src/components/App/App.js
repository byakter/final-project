import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
// import Navigation from '../Navigation/Navigation';
import About from '../About/About';
// import Modal from '../../blocks/Modal';
import Signin from '../auth/Signin'
import Signup from '../auth/Signup'

function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path='/' element={<Signin />} />
          <Route path='/Main' element={<Main
          />} />
          <Route path='/about' element={<About />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signout' element={<Signin />} />
        </Routes>

        <Footer className='footer' />
      </div>
    </BrowserRouter>
  );
}

export default App;
