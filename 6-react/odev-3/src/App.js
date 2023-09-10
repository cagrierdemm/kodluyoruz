
import './App.css';
import Weather from './components/Weather';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <>
      <ThemeProvider>
        <Weather/>
      </ThemeProvider>
    </>
  );
}

export default App;
