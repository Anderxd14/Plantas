import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/footer";
import ObjetivoH from "../components/objetivoH";


const Home = () => {
    return(
      <aside className="Home">
        
        <div>
          <Nav/>
        </div>

        <div>
        <Header/>
        </div>

        <div>
         <ObjetivoH />
        </div>
         
        <div>
        <Footer/>
        </div>
      </aside>
    );

}

export default Home;