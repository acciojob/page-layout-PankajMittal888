
import React from "react";
import './../styles/App.css';
import Header from "./header";
import Footer from "./footer";

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <Header/>
        This is the content of my Website
        <Footer/>
    </div>
  )
}

export default App
