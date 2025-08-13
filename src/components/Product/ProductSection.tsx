import './ProductSection.css'
import tshirt from '@/assets/t-shirt.png'
import jeans from '@/assets/jeans.png'
import tlong from '@/assets/t-long.png'
import t2 from '@/assets/t-2.png'
import tlong2 from '@/assets/t-long 2.png'
import sjeans from '@/assets/s-jeans.png'
import ot from '@/assets/o-t.png'
import ljeans from '@/assets/l-jeans.png'
import { Star, StarHalf } from 'lucide-react'
import { Link } from 'react-router-dom'

const newArrivals = [
  { id: 11, img: tshirt, name: 'T-shirt with Tape Details', price: '$120', discountValue: '-20%' },
  { id: 4, img: jeans, name: 'Skinny Fit Jeans', price: '$240', mainPrice: '$260', discount: true, discountValue: '-20%' },
  { id: 5, img: tlong, name: 'Checkered Shirt', price: '$180', discountValue: '-20%' },
  { id: 6, img: t2, name: 'Sleeve Striped T-shirt', price: '$130', mainPrice: '$160', discount: true, discountValue: '-30%' },
]

const topSelling = [
  { id: 7, img: tlong2, name: 'Vertical Striped Shirt', price: '$212', mainPrice: '$232', discount: true, discountValue: '-20%' },
  { id: 8, img: ot, name: 'Courage Graphic T-shirt', price: '$145', discountValue: '-20%' },
  { id: 9, img: sjeans, name: 'Loose Fit Bermuda Shorts', price: '$80', discountValue: '-20%' },
  { id: 12, img: ljeans, name: 'Faded Skinny Jeans', price: '$210', discountValue: '-20%' },
]

const ProductSection = ({ title, type }: { title: string, type: string }) => {
  const products = type === 'top' ? topSelling : newArrivals
  return (
    <section className="product-section" id="product-section">
      <h2 className="product-section-title">{title}</h2>
      <div className="product-section-product-list">
        {products.map((p, i) => (
          <Link to={`/details/${p.id}`} className="product-card-wrapper" key={i} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="product-section-product-card">
              <img src={p.img} alt={p.name} />
            </div>
            <div className="product-section-product-info">
              <div className="product-section-product-name">{p.name}</div>
              <div className="product-section-product-stars">
                {type === 'top' && i === 0 ? (
                  <>
                    <Star fill="#FFC120" color="#FFC120" size={22} />
                    <Star fill="#FFC120" color="#FFC120" size={22} />
                    <Star fill="#FFC120" color="#FFC120" size={22} />
                    <Star fill="#FFC120" color="#FFC120" size={22} />
                    <Star fill="#FFC120" color="#FFC120" size={22} />
                    <span>5.0/5</span>
                  </>
                ) : type === 'top' && i === 1 ? (
                  <>
                    <Star fill="#FFC120" color="#FFC120" size={22} />
                    <Star fill="#FFC120" color="#FFC120" size={22} />
                    <Star fill="#FFC120" color="#FFC120" size={22} />
                    <Star fill="#FFC120" color="#FFC120" size={22} />
                    <Star color="#FFC120" size={22} />
                    <span>4.0/5</span>
                  </>
                ) : type === 'top' && i === 2 ? (
                  <>
                    <Star fill="#FFC120" color="#FFC120" size={22} />
                    <Star fill="#FFC120" color="#FFC120" size={22} />
                    <Star fill="#FFC120" color="#FFC120" size={22} />
                    <Star color="#FFC120" size={22} />
                    <Star color="#FFC120" size={22} />
                    <span>3.0/5</span>
                  </>
                ) : i === 1 && type !== 'top' ? (
                  <>
                    <Star fill="#FFC120" color="#FFC120" size={22} />
                    <Star fill="#FFC120" color="#FFC120" size={22} />
                    <Star fill="#FFC120" color="#FFC120" size={22} />
                    <StarHalf fill="#FFC120" color="#FFC120" size={22} />
                    <Star color="#FFC120" size={22} />
                    <span>3.5/5</span>
                  </>
                ) : (
                  <>
                    <Star fill="#FFC120" color="#FFC120" size={22} />
                    <Star fill="#FFC120" color="#FFC120" size={22} />
                    <Star fill="#FFC120" color="#FFC120" size={22} />
                    <Star fill="#FFC120" color="#FFC120" size={22} />
                    <StarHalf fill="#FFC120" color="#FFC120" size={22} />
                    <span>4.5/5</span>
                  </>
                )}
              </div>
              <div className="product-section-product-price">
                {p.mainPrice && p.discount ? (
                  <>
                    <span className="product-section-discounted-price">{p.price}</span>
                    <span className="product-section-main-price">{p.mainPrice}</span>
                    <span className="product-section-discount-badge">{p.discountValue}</span>
                  </>
                ) : (
                  <>{p.price}</>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Link to="/categories" className="product-section-view-all-link">
        <button className="product-view-all">View All</button>
      </Link>
    </section>
  )
}

export default ProductSection