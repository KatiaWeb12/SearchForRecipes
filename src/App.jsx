import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import RootRouter from './RootRouter';
export default function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: 'rgb(6, 158, 128)',
      },
      secondary: {
        main: '#11cb5f',
      },
      typography: {
        fontFamily: "'Alata', sans-serif",
      }
    },
  });
  return (
    <div className="App">
        <ThemeProvider theme={theme}>
            <RootRouter/>
        </ThemeProvider>
    </div>
  );
}
