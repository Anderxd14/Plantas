import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/footer";

const Home = () => {
    return(
      <aside className="Home">
        <div>
          <Nav/>
        </div>
        <div>
        <Header/>
        </div>
        <Footer/>
        <div>

        </div>
      </aside>
    );

}

export default Home;