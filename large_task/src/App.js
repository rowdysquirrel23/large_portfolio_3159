import Navbar from './navbar/navbar';
import './App.css';
import './navbar/nav.css'
import Home from './pages/homePage';
import Services from './pages/servicesPage';
import Gallery from './pages/galleryPage';
import Faqs from './pages/faqsPage';
import Contact from './pages/contactPage';
import { Route, Routes} from 'react-router-dom';

function App() {
   
    return ( 
    <>
    < Navbar />
    <div className='container'>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/faqs" element={<Faqs/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
    </>
      )

}

export default App;
