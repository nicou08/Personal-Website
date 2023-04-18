import React, { useState, useEffect, useRef } from "react";
import Socials from "./components/layout/Socials";
import Header from "./components/layout/Header";
import AvailablePages from "./components/Pages/AvailablePages";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Projects from "./components/Pages/Projects";
import Contact from "./components/Pages/Contact";

function App() {
  // This is to show the header after 1 second
  const [showFragment, setShowFragment] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFragment(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // This is to handle the header buttons
  const [activePage, setActivePage] = useState(1);
  const pagesRef = useRef(null);

  const handleButtonClick = (index) => {
    console.log("Heer is index");
    console.log(index);
    console.log(pagesRef.current.offsetHeight);
    setActivePage(index);
    pagesRef.current.scrollTo({
      top: pagesRef.current.offsetHeight * index,
      behavior: "smooth",
    });
  };

  const pages = [<Home />, <About />, <Projects />, <Contact />];
  // Make ref here to pass it to available pages and header

  return (
    <>
      {showFragment && (
        <React.Fragment>
          <Header pagereff={pagesRef} onHandleButton={handleButtonClick} />
          <AvailablePages pagerefff={pagesRef} />
          <Socials />
        </React.Fragment>
      )}
    </>

    // <React.Fragment>
    //   <Header />
    //   <AvailablePages />
    //   <Socials />
    // </React.Fragment>
  );
}

export default App;
