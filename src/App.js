import React, { Fragment } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Routers from "./routers/Routers";
import { createTheme, ThemeProvider } from '@mui/material';
import { useState,  useMemo, useEffect } from 'react';
import { Theme } from './components/Theme/Theme';
import { CartProvider } from "react-use-cart";



function App() {
  // Dark Mode
  const [mode, setMode] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        document.body.className = mode;
        localStorage.setItem("theme", mode);
    }, [mode]);
    // @ts-ignore
    const theme = useMemo(() => createTheme(Theme(mode)), [mode]);

    

  return (
      <div className='App'>
          <ThemeProvider theme={theme}>
              <Fragment>
                <CartProvider>
                  <Header setMode={setMode} />
                    <div>
                      <Routers />
                    </div>
                  <Footer />
                </CartProvider>
            </Fragment>
          </ThemeProvider>
      </div>
  );
}

export default App;
