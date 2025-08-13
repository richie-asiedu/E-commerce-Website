import './BrandBar.css'
import Vers from '@/assets/Vers.png'
import Zara from '@/assets/zara.png'
import Gucci from '@/assets/Gucci.png'
import Prada from '@/assets/Prada.png'
import CalvinK from '@/assets/Calvin k.png'

const brands = [
  { src: Vers, alt: 'Versace' },
  { src: Zara, alt: 'Zara' },
  { src: Gucci, alt: 'Gucci' },
  { src: Prada, alt: 'Prada' },
  { src: CalvinK, alt: 'Calvin Klein' }
]

const BrandBar = () => (
  <section className="brand-bar-carousel" id="brand-bar-carousel">
    <div className="brand-bar-track">
      {[...brands, ...brands].map((brand, i) => (
        <img
          className="brand-bar-logo-img"
          src={brand.src}
          alt={brand.alt}
          key={i}
        />
      ))}
    </div>
  </section>
)

export default BrandBar 