import logo from './logo.svg';
//import Navbar from './components/navbar';
import './App.css';

import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Clock from './components/Clock/Clock'

function App() {
  return (
        <div className="App">
          <Navigation />
          <Clock />
          <Logo />
          <Rank />
          <ImageLinkForm />
          {/*
          <FaceRecognition /> */}
        </div>
  );
}

export default App;
