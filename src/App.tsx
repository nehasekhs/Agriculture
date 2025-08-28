import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import OurStory from './pages/OurStory';
import ServiceableLocations from './pages/ServiceableLocations';
import ScrollToTop from './components/ScrollToTop';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsCondition';
import RefundPolicy from './pages/RefundPolicy';
import CropzapGrower from './pages/Supply-of-agri-produce-and-products';
import Cropzapmart from './pages/Large-volume-trading';
import Blog from './pages/Blog';
import ESG from './pages/Esg';
import RegistrationForm from './pages/agri-services-vertezy';
import CropmartForm from './pages/cropmartform';
import Shop from './pages/Shop';
import Cart from './pages/Cart';



export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/esg" element={<ESG />} />
            <Route path="/locations" element={<ServiceableLocations />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path='/refund' element={<RefundPolicy />} />
            <Route path='/Supply-of-agri-produce-and-products' element={<CropzapGrower/>}/>
            <Route path='/Large-volume-trading' element={<Cropzapmart/>}/>
            <Route path='/agri-services-vertezy' element={<RegistrationForm/>}/>
            <Route path="/cropmartform" element={<CropmartForm/>}/>
            <Route path="/shop" element={<Shop/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}