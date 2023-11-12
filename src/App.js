import { BrowserRouter as Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MainSection } from './components/MainSection';
import './App.css';

function App() {
  return (
    <Route>
      <Header />
        <Routes>
          <Route path="/" exact component={MainSection} />
          {/* Define other routes here */}
         </Routes>      
      <Footer />
    </Route>
  );
}

export default App;