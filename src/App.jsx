import Navbar from './components/Navbar';
import About from './components/About';
import BenefitsSection from './components/Benefit';
import ProductCard from './components/ProductCard.jsx';
import CallToAction from './components/CallToAction';
import Testimoni from './components/Testimoni';
import FAQ from './components/Faq';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <About />
      <BenefitsSection />
      <ProductCard />
      <CallToAction />
      <Testimoni />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
