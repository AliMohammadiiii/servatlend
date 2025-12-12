import Hero from '../components/sections/Hero';
import LoanCalculator from '../components/sections/LoanCalculator';
import Features from '../components/sections/Features';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import FAQ from '../components/sections/FAQ';
import Footer from '../components/sections/Footer';

export default function Index() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Hero />
      <LoanCalculator />
      <Features />
      <WhyChooseUs />
      <FAQ />
      <Footer />
    </div>
  );
}
