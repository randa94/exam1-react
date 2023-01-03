
import './App.css';
import Navbar from './components/navbar';
import Home from "./components/home";
import { Routes, Route } from 'react-router-dom';
import Users from './components/users';

import User from './components/user';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
  
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/users/:id" element={<User/>}/>
      </Routes>
      <ToastContainer/>
     
    </div>
  );
}

export default App;
