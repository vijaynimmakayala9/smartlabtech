import Home from './pages/Home.js'
import AnalyticalBalance from './pages/AnalyticalBalancer.js';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ContactPage from './pages/ContactPage.js';
import ServicesPage from './pages/ServicesPage.js';
import AboutPage from './pages/AboutPage.js';
import BlogsPage from './pages/BlogsPage.js';
import BlogDetailsPage from './pages/BlogDetails.js';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analytics" element={<AnalyticalBalance/>} />
        <Route path='/contact' element={<ContactPage/>} />
        <Route path='/services' element={<ServicesPage/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/blogs' element={<BlogsPage/>} />
        <Route path='/blogDetails' element={<BlogDetailsPage/>}/> 
      </Routes>
    </>
  )
}

export default App;