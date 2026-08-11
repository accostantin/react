import { useState } from "react";
import Header from './components/Header.jsx';
import Button from './components/Button.jsx';
import Sidebar from './components/Sidebar.jsx';
import Banner from './components/Banner.jsx';
import Home from './components/Home.jsx';
import ProfileSection from './components/ProfileSection.jsx';

import './App.css';

function App() {

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Header  onMenuClick={() => setIsOpen(true)} /> 
      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)}/>
      <Banner />
      <Home />
      <ProfileSection />
    </div>
  );
}

export default App;