import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Search from './components/Search';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Routes>
        <Route path='/' element={<Search />} />
        <Route path='/:jobId' />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
