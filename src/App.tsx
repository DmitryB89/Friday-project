import React from 'react';
import './App.css';
import {NavLink, Route, Router, Routes} from "react-router-dom";
import {Error} from "./pages/Error";
import {Test} from "./pages/Test";
import {Register} from "./pages/Register";
import {Login} from "./pages/Login";
import {Recovery} from "./pages/Recovery";
import {Profile} from "./pages/Profile";
import {Password} from "./pages/Password";

function App() {
    return (
        <>
            <Routes>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/recovery' element={<Recovery/>}/>
                <Route path='/password/' element={<Password/>}/>
                <Route path='/test' element={<Test/>}/>
                <Route path='/error' element={<Error/>}/>
            </Routes>
        </>
    );
}

export default App;
