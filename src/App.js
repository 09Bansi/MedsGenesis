
import './App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Componenet/Navbar';
import Content from './Componenet/Content';
import Service from './Page/Service';
import Footer from './Componenet/Footer';
import ReadMore from './Page/ReadMore';
import About from './Page/About';
import Contact from './Page/Contact'




function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      
      
      <Routes>
        <Route path="/" element={<Content/>}/>
        <Route path="/service" element={<Service />} />
        <Route path="/read-more/:id" element={<ReadMore />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        
        {/* <Route path="/read-more" element={<ReadMore />} /> */}
      </Routes>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
