import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import { Home, About, Contact, Menu } from './pages';
import { Breakfast } from './components/menu/Breakfast'
import { Donuts } from './components/menu/Donuts'
import { Specials } from './components/menu/Specials'
import { Specialties } from './components/menu/Specialties'
import Dashboard from './pages/Dashboard';
import Landing from './pages/Landing';
import "./style.css"
import { Navbar, Footer, Layout} from './components/layout'

function App() {
  return (
    <ChakraProvider theme={ theme }>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={ <Layout /> }> */}
          <Route path="/" element={ <Home /> } />
          <Route path="/landing" element={ <Landing /> } />

          <Route path="/dashboard" element={ <Dashboard /> } />
          <Route path="/contact" element={ <Contact /> } />
          <Route path="/menu" element={ <Menu /> } />
          <Route path="/donuts" element={ <Donuts /> } />
          <Route path="/breakfast" element={ <Breakfast /> } />
          <Route path="/specials" element={ <Specials /> } />
          <Route path="/specialties" element={ <Specialties /> } />
          <Route path="/about" element={ <About /> } />
       
      </Routes>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
