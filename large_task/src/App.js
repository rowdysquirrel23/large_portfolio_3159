import Navbar from './components/navbar/navbar';
import './App.css';
import './components/navbar/nav.css';
import Home from './pages/home/homePage';
import Services from './pages/services/servicesPage';
import Gallery from './pages/gallery/galleryPage';
import Faqs from './pages/faqs/faqsPage';
import Contact from './pages/contact/contactPage';
import { Route, Routes} from 'react-router-dom';
import Footer from './components/footer/footer';
import './components/footer/footer.css';

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
    <Footer />
    </>

      )

}

export default App;
