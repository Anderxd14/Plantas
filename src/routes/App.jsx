import React  from "react";
import{ BrowserRouter, Routes,Route } from 'react-router-dom';
import Layout from "../containers/Layout";
import Login from "../containers/Login";
import RecoveryPassword from "../containers/recoveryPassword";
import Home from '../pages/Home';
import NotFound from "../pages/NotFound";
import '../styles/global.css';
import Perfil from "./Perfil";


const App = () =>{
    return(
        <BrowserRouter>      
        <Layout>
            <Routes>
                <Route exact path="/" element ={<Home/>} />
                <Route exact path="/login" element ={<Login/>} />
                <Route exact path="recovery-password" element ={<RecoveryPassword/>} />
                <Route path= "*" element={<NotFound/>}/>
                <Route exact path="Perfil"element={<Perfil/>} />
            </Routes>
        </Layout>       
        </BrowserRouter>   
    );
}

export default App;