import React from 'react';
import { Courses } from './courses/Courses';
import Home from './home/Home';
import { Navigate, Route, Routes } from "react-router-dom"
import Signup from './components/Signup';
import Contact from './components/Contact';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';


const App = () => {
  const [authUser, setAuthUser] =useAuth();
console.log( authUser);
  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={authUser ? <Courses /> : <Navigate to="/signup" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Toaster />

    </>
  )
}

export default App;