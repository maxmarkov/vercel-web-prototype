/*import { BrowserRouter as Route, Routes } from 'react-router-dom';*/
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Body } from './components/Body';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;