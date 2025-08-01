import './HeroSection.css'
import HeroPic from '@/assets/HeroPic.png'
import Kite from '@/assets/kite.png'
import { Link } from 'react-router-dom'

const HeroSection = () => (
  <section className="hero-section">
    <div className="hero-section-content">
      <h1 className="hero-section-title">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
      <p className="hero-section-desc">
        Browse through our diverse collection of styles to find the perfect match for you.
        Our products are designed to ensure you look and feel your best.
      </p>
      <Link to='/categories'><button className="hero-section-cta">Shop Now</button></Link>
      <div className="hero-section-stats">
        <div><span>200+</span><br />International Brands</div>
        <div><span>2,000+</span><br />High-Quality Products</div>
        <div><span>30,000+</span><br />Happy Customers</div>
      </div>
    </div>
    <div className="hero-section-image">
        <img src={HeroPic} alt="Hero Models" />
    </div>
    <div className="mini-image">
      <img src={Kite} alt='Kite' />
    </div>
    <div className="small-image">
      <img src={Kite} alt='Kite' />
    </div>

  </section>
)

export default HeroSection 