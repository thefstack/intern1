import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Dashboard from "./components/Dashboard"
import Page404 from "./components/Page404"
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='*' element={<Page404/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
