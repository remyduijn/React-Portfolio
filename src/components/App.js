import '../styles/App.css'
import React from 'react'
// import Background from './Background'
import {BrowserRouter as Router} from 'react-router-dom';
// import Navbar from './Navbar';
// import Sidebar from './Sidebar';
import Home from '../pages'

function App() {
  return (
    <div>
    <Router>
        <Home />

        {/* <Sidebar />
        <Navbar />
        <Routes>
            <Route path='/Home' element={<Home/>} />
        </Routes> */}
    </Router>
    {/* <Background /> */}
    </div>
  );
}

export default App;
