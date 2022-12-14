import React  from "react";
import{ BrowserRouter, Routes,Route } from 'react-router-dom';
import Layout from "../containers/Layout";
import Login from "../containers/Login";
import RecoveryPassword from "../containers/recoveryPassword";
import Home from '../pages/Home';
import NotFound from "../pages/NotFound";
import Perfil from "../pages/Perfilp";
import '../styles/global.css';



const App = () =>{
    return(
        <BrowserRouter>      
        <Layout>
            <Routes>
                <Route exact path="/" element ={<Home/>} />
                <Route exact path="/login" element ={<Login/>} />
                <Route exact path="/Perfil" element ={<Perfil/>} />
                <Route exact path="/recovery-password" element ={<RecoveryPassword/>} />
                <Route path= "*" element={<NotFound/>}/>
               
            </Routes>
        </Layout>       
        </BrowserRouter>   
    );
}

export default App;