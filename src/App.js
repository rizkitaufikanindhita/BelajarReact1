// import logo from "./logo.svg";
import "./App.css";
import MyButton from "./component/MyButton";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import React, { useState } from "react";

function App() {
  const navHeading = "Navigation Bar";
  const navText = "RIZKI";

  // const clicked = () => {
  //   alert("Button clicked!");
  // };

  // dicomment karena yakin sudah berfungsi
  // const traceButton = () => {
  //   alert("Button clicked!");
  //   console.log("Button clicked!");
  // };

  // state itu seperti variable namun bisa diubah, tipe data bisa apa saja
  const [getNavbarText, setNavbarText] = useState("");

  const changeNavbarText = () => {
    setNavbarText("TAUFIK");
  };

  const paragraf = () => {
    return <i>© 2009 - 2023, PT. Tokopedia.</i>;
  };

  return (
    <div className="App">
      <header className="App-header">
        <Navbar
          navText={navText}
          navHeading={navHeading}
          getNavbarText={getNavbarText}
        />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <MyButton clicked={clicked} /> */}
        {/* <MyButton traceButton={traceButton} /> */}
        <MyButton changeNavbarText={changeNavbarText} />
        <Footer paragraf={paragraf} />
      </header>
    </div>
  );
}

export default App;
