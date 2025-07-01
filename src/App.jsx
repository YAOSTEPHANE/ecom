import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/footer'
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home'
import ListeProduits from './Pages/ListeProduits/listeProduits';
import DetailsProduits from './Pages/DetailsProduits/DetailsProduits';

function App() {

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" exact={true} element={<Home />} />
      <Route path={"/listeProduits"} exact={true} element={<ListeProduits />} />
      <Route path={"/detailsProduits/:id"} exact={true} element={<DetailsProduits />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    
    </>
  )
}

export default App
