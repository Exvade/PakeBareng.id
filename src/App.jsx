import About from './components/About';
import BenefitsSection from './components/Benefit';
import CallToAction from './components/CallToAction';
import FAQ from './components/Faq';
import Footer from './components/Footer';
import Homepage from './components/Homepage.jsx';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard.jsx';
import Testimoni from './components/Testimoni';

function App() {
  return (
    <div className='bg-dark'>
      <Navbar />
      <Homepage />
      <About />
      <BenefitsSection />
      <ProductCard />
      <CallToAction />
      <Testimoni />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
