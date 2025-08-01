import './Testimonials.css'
import { useRef } from 'react'
import { ChevronLeft, ChevronRight, Star, CheckCircle2 } from 'lucide-react'

const testimonials = [
  { name: 'Sarah M.', text: "The best online store! Great styles and quality.I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations." },
  { name: 'Alex K.',  text:  "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions." },
  { name: 'James L.', text: "The range of options and quality is fantastic." },
  { name: 'Maria P.', text: 'Fast shipping and amazing customer service. Highly recommend!' },
  { name: 'David R.', text: 'Great prices and a huge selection. I found everything I needed.' },
  { name: 'Linda S.', text: 'The quality of the clothes is top-notch. Will shop again!' },
  { name: 'Chris T.', text: 'Easy to use website and the products look even better in person.' },
  { name: 'Priya N.', text: 'I love the unique styles and the fit is perfect every time.' },
]

const Testimonials = () => {
  const listRef = useRef<HTMLDivElement>(null);
  const CARD_WIDTH = 300 + 16;

  const scrollLeft = () => {
    if (listRef.current) {
      listRef.current.scrollBy({ left: -CARD_WIDTH, behavior: 'smooth' });
    }
  };
  const scrollRight = () => {
    if (listRef.current) {
      listRef.current.scrollBy({ left: CARD_WIDTH, behavior: 'smooth' });
    }
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <h2 className="testimonials-title">OUR HAPPY CUSTOMERS</h2>
        <div className="testimonials-arrows">
          <button className="testimonial-arrow-btn" onClick={scrollLeft}><ChevronLeft size={28} /></button>
          <button className="testimonial-arrow-btn" onClick={scrollRight}><ChevronRight size={28} /></button>
        </div>
      </div>
      <div
        className="testimonial-list testimonial-list-animate"
        ref={listRef}
        style={{
          display: 'flex',
          gap: '1rem',
          overflowX: 'auto',
          WebkitOverflowScrolling: 'touch',
          paddingBottom: '1rem',
        }}
      >
        {testimonials.map((t, i) => (
          <div
            className="testimonial-card"
            key={t.name + i}
            style={{ minWidth: '300px', boxSizing: 'border-box', flex: '0 0 auto' }}
          >
            <div className="testimonial-stars">
              <Star fill="#FFC633" color="#FFC633" size={22} />
              <Star fill="#FFC633" color="#FFC633" size={22} />
              <Star fill="#FFC633" color="#FFC633" size={22} />
              <Star fill="#FFC633" color="#FFC633" size={22} />
              <Star fill="#FFC633" color="#FFC633" size={22} />
            </div>
            <div className="testimonial-name">
              {t.name}
              <CheckCircle2 size={22} color="#fff" fill="#22C55E" className="testimonial-check" />
            </div>
            <div className="testimonial-text">{t.text}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials 