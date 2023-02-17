import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import { Box } from '@mui/system';
import { publicRouter } from "./routes";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {grey } from '@mui/material/colors';
import DefaultLayout from "./Layouts/Components/DefaultLayout";


function App() {
  const customtheme = (mode) => {
    return {
      palette: {
        mode: mode,
        ...(mode === 'light'
          ? {
            // palette values for light mode
            background: {
              paper: '#fff',
            },
            text: {
              primary: grey[900],
              secondary: grey[800],
            },
          }
          : {
            // palette values for dark mode
            background: {
              paper: '#2e2e2e',
            },
          }),
      }
    }
  };
  const theme = createTheme(customtheme('dark'));
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box sx={{
          bgcolor: 'background.default',
          color: 'text.primary'
        }}>
          <Routes>
            {publicRouter.map((route, index) => {
              let Layouts = DefaultLayout;
              if (route.hasOwnProperty('layout')) {
                if (route.layout != null) {
                  Layouts = route.layout;
                } else {
                  Layouts = Fragment;
                }
              }
              const Page = route.components;
              return <Route key={index} path={route.path}
                element={<Layouts>
                  <Page />
                </Layouts>} />
            })}
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
}
export default App;
