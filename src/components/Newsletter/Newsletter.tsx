import './Newsletter.css'
import evo from '@/assets/evo.png'
const Newsletter = () => (
  <section className="newsletter-section">
    <div className="newsletter-content">
      <h3>STAY UP TO DATE ABOUT OUR LATEST OFFERS</h3>
      <form className="newsletter-form">
        <div className="newsletter-input-wrapper">
          <img src={evo} alt="evo" className="newsletter-input-icon" />
          <input type="email" placeholder="Enter your email address" />
        </div>
        <button type="submit">Subscribe to Newsletter</button>
      </form>
    </div>
  </section>
)

export default Newsletter 