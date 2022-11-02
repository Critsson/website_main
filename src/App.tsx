import React from 'react';
import './styles/App.css';
import { Navbar } from "./components/Navbar"
import { Intro } from "./components/Intro"
import { ThemeProvider, createTheme } from "@mui/material"
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import getWindowWidth from './getWindowWidth';

const theme = createTheme({
  palette: {
    primary: {
      main: "#18191F"
    }
  },
  typography: {
    fontFamily: "Roboto"
  },
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          top: "-1.2vh",
          display: "flex",
          justifyContent: "center"
        }
      }
    }
  }
})

function App() {

  const [windowWidth, setWindowWidth] = React.useState(getWindowWidth())

  React.useEffect(() => {
    function windowResized() {
      setWindowWidth(getWindowWidth());
    }

    window.addEventListener('resize', windowResized);
    return () => window.removeEventListener('resize', windowResized);
  }, [])

  return (
    <ThemeProvider theme={theme}>
      {windowWidth > 640 ? <div style={{
        display: "flex", flexDirection: "column", alignItems: 'center', height: "110vh", overflow: "hidden",
        scrollSnapType: "y mandatory", scrollBehavior: "smooth"
      }}>
        <Navbar />
        <Intro />
        <Skills />
        <Projects />
      </div>
        :
        <div style={{
          display: "flex", flexDirection: "column", alignItems: 'center', height: "100vh", overflow: "auto",
          scrollSnapType: "y mandatory", scrollBehavior: "smooth"
        }}>
          <Navbar />
          <Intro />
          <Skills />
          <Projects />
        </div>}
    </ThemeProvider>
  )
}

export default App;
