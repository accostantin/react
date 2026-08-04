import { useState } from "react";
import Header from './header.jsx';
import Button from './btn.jsx';
import Sidebar from "./sidebar.jsx";
import Banner from "./banner.jsx";

import './App.css';

function App() {

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Header  onMenuClick={() => setIsOpen(true)} /> 
      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)}/>
      <Banner />
    </div>
  );
}

export default App;