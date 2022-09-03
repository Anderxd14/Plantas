import React from "react";
import Nav from '../components/Nav';



const Layout = ({ children }) => {
    return(
        <div className = "Layout">
            {children}
        </div>
    );
}

export default Layout;