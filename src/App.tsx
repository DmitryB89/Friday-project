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
        <div>
            <div className={'navlinks'}>
                <NavLink to={'/login'}>Login page</NavLink><br/>
                <NavLink to={'/register'}>Register page</NavLink><br/>
                <NavLink to={'/profile'}>Profile</NavLink><br/>
                <NavLink to={'/recovery'}>Password recovery</NavLink><br/>
                <NavLink to={'/password/'}>Password creation</NavLink><br/>
                <NavLink to={'/test'}>Components</NavLink><br/>
                <NavLink to={'/error'}>Error</NavLink><br/>
            </div>


            <Routes>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/recovery' element={<Recovery/>}/>
                <Route path='/password/' element={<Password/>}/>
                <Route path='/test' element={<Test/>}/>
                <Route path='/error' element={<Error/>}/>
            </Routes>
        </div>
    );
}

export default App;
