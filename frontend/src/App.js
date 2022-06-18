import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import AdminPanel from './Components/AdminPanel';
import Cart from './Components/Cart';
import Home from './Components/Home';
import Items from './Components/Items';
import MyAccount from './Components/MyAccount';
import Navbar from './Components/Navbar';

function App() {
  // const [currentUser, setCurrentUser] = useState()
  // fetch("/api/user", {
  //   method: 'Get',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Authorization': window.localStorage.getItem("auth-token")
  //   }
  // })
  //   .then(res => res.json())
  //   .then(data => {
  //     setCurrentUser(data.user)
  //   })


  // console.log(currentUser);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/' element={<Home />} />
          <Route path='/items' element={<Items />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/myAccount' element={<MyAccount />} />
          <Route path='/admin' element={<AdminPanel />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
