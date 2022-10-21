import React from 'react';
import './styles/App.css';
import { Navbar } from "./components/Navbar"
import { Intro } from "./components/Intro"
import { ThemeProvider, createTheme } from "@mui/material"
import { Skills } from './components/Skills';

const theme = createTheme({
  palette: {
    primary: {
      main: "#18191F"
    }
  },
  typography: {
    fontFamily: "Roboto"
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <div style={{
        display: "flex", flexDirection: "column", alignItems: 'center', height: "90vh", overflowY: "hidden",
        scrollSnapType: "y mandatory", scrollBehavior: "smooth"
      }}>
        <Intro />
        <Skills />
      </div>
    </ThemeProvider>
  );
}

export default App;
