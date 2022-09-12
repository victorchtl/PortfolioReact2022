import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import About from './pages/About';
import Navbar from './components/Navbar';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { blue, cyan, deepOrange, grey, teal } from '@mui/material/colors';
import { QueryClient, QueryClientProvider } from 'react-query';
import { store } from './store'
import { Provider, useSelector } from 'react-redux'
import Project from './pages/Project';

function App() {

  const theme = createTheme({

    components: {
      MuiAppBar: {
        styleOverrides: {
          colorPrimary: {
            backgroundColor: 'white'
          }
        }
      }
    },

    palette: {
      primary: {
        main: '#f06c35',
        light: '#ffc200'
      },
      secondary: {
        main: '#007e96',
        light: '#b0dee5'
      },
    },
    
    typography: {
      "fontFamily": `"OpenSans", sans-serif`,
      h1: {
        fontFamily: `"Prata", sans-serif`,
        fontWeight: 300,
        fontSize: "3.75rem"
      },
      h2: {
        fontFamily: `"Prata", sans-serif`,
        fontWeight: 300,
        fontSize: "1.5rem"
      }
    }
  });

  const themeDark = createTheme({

    components: {
      MuiAppBar: {
        styleOverrides: {
          colorPrimary: {
            backgroundColor: '#121212'
          }
        }
      }
    },

    palette: {
      mode: 'dark',
      primary: {
        main: '#f06c35',
        light: '#ffc200'
      },
      secondary: {
        main: '#007e96',
        light: '#b0dee5'
      },
    },

    typography: {
      "fontFamily": `"OpenSans", sans-serif`,
      h1: {
        fontFamily: `"Prata", sans-serif`,
        fontWeight: 300,
        fontSize: "3.75rem"
      },
      h2: {
        fontFamily: `"Prata", sans-serif`,
        fontWeight: 300,
        fontSize: "1.5rem"
      }
    }
  });

  const queryClient = new QueryClient()

  const lightMode = useSelector((state) => state.lightMode.value)

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={lightMode ? theme : themeDark}>
          <CssBaseline />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="portfolio/:id" element={<Project />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
          </Routes>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
