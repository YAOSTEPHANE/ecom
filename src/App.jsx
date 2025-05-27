import './App.css'
import Header from './components/header/header.jsx'
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home.jsx'

function App() {

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" exact={true} element={<Home />} />
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
