import React, { useState, useEffect } from "react";
import Socials from "./components/layout/Socials";
import Header from "./components/layout/Header";
import AvailablePages from "./components/Pages/AvailablePages";

function App() {
  const [showFragment, setShowFragment] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFragment(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showFragment && (
        <React.Fragment>
          <Header />
          <AvailablePages />
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
