import React from 'react';
import './styles/App.css';
import { Navbar } from "./components/Navbar"
import { Intro } from "./components/Intro"
import { ThemeProvider, createTheme } from "@mui/material"
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';

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
      <div style={{
        display: "flex", flexDirection: "column", alignItems: 'center', height: "100vh", overflowY: "hidden",
        scrollSnapType: "y mandatory", scrollBehavior: "smooth"
      }}>
        <Navbar />
        <Intro />
        <Skills />
        <Projects />
      </div>
    </ThemeProvider>
  );
}

export default App;