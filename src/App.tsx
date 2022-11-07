import React from 'react';
import './styles/App.css';
import { Navbar } from "./components/Navbar"
import { Intro } from "./components/Intro"
import { ThemeProvider, createTheme } from "@mui/material"
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import getWindowWidth from './getWindowWidth';

const theme = createTheme({
  palette: {
    primary: {
      main: "#18191F"
    },
    secondary: {
      main: "#AEE728"
    }
  },
  typography: {
    fontFamily: "Roboto"
  },
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          top: "-1vh",
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
        display: "flex", flexDirection: "column", alignItems: 'center', height: "100vh", overflow: "hidden",
        scrollSnapType: "y mandatory", scrollBehavior: "smooth", position: "absolute", left: ".5vw"
      }}>
        <Navbar />
        <Intro />
        <Skills />
        <Projects />
        <Contact />
      </div>
        :
        <div className="window_container_mobile">
          <Navbar />
          <Intro />
          <Skills />
          <Projects />
          <Contact />
        </div>}
    </ThemeProvider>
  )
}

export default App;
