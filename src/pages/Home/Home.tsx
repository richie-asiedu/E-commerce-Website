import { useEffect } from 'react'
import HeroSection from '@/components/Hero/HeroSection'
import BrandBar from '@/components/Brand/BrandBar'
import ProductSection from '@/components/Product/ProductSection'
import DressStyleGrid from '@/components/Styles/DressStyleGrid'
import Testimonials from '@/components/Testimonials/Testimonials'

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <main>
      <HeroSection />
      <BrandBar />
      <ProductSection title="NEW ARRIVALS" type="new" />
      <ProductSection title="TOP SELLING" type="top" />
      <DressStyleGrid />
      <Testimonials />
    </main>
  );
};

export default Home