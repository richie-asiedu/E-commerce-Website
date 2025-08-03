import React from 'react';
import './Details.css';
import { useParams } from 'react-router-dom';
import { products } from '@/data/products';
import { Star, StarHalf, CheckCircle2 } from 'lucide-react';
import filter from '@/assets/D filter.png';
import option from '@/assets/D option.png';


const reviews = [
  {
    name: 'Samantha D.',
    date: 'August 14, 2023',
    text:
      "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt!",
  },
  {
    name: 'Alex M.',
    date: 'August 15, 2023',
    text:
      "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
  },
  {
    name: 'Ethan R.',
    date: 'August 16, 2023',
    text:
      "This t-shirt is a must-have for anyone who appreciates good design. The minimalist yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
  },
  {
    name: 'Olivia P.',
    date: 'August 17, 2023',
    text:
      "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
  },
  {
    name: 'Liam K.',
    date: 'August 18, 2023',
    text:
      "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
  },
  {
    name: 'Ava H.',
    date: 'August 19, 2023',
    text:
      "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
  },
];

const alsoLike = [
  {
    name: 'Polo with Contrast Trims',
    price: 212,
    oldPrice: 242,
    discount: 20,
    rating: 4.0,
    img: '/src/assets/AL 1.png',
  },
  {
    name: 'Gradient Graphic T-shirt',
    price: 145,
    rating: 3.5,
    img: '/src/assets/AL 2.png',
  },
  {
    name: 'Polo with Tipping Details',
    price: 180,
    rating: 4.5,
    img: '/src/assets/AL 3.png',
  },
  {
    name: 'Black Striped T-shirt',
    price: 120,
    oldPrice: 150,
    discount: 30,
    rating: 3.0,
    img: '/src/assets/AL 4.png',
  },
];

import { useEffect } from 'react';
import { useCartStore } from '@/store/cartStore';
import { Link } from 'react-router-dom';

const Details = () => {
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  
  const product = products.find(p => p.id === Number(id));
  const [qty, setQty] = React.useState(1);
  React.useEffect(() => {
    setQty(1);
  }, [id]);
  const [mainImgIdx, setMainImgIdx] = React.useState(0);
  const [selectedSize, setSelectedSize] = React.useState(product?.sizes[0] || '');
  const [selectedColor, setSelectedColor] = React.useState(product?.colors[0] || '');
  const addToCart = useCartStore((state) => state.addToCart);

  if (!product) {
    return <div style={{padding:40, textAlign:'center'}}>Product not found.</div>;
  }
  return (
    <div className="details-container">
      <div className="details-breadcrumbs">
        <span>Home</span> <span className="details-breadcrumbs-sep">&gt;</span> <span>Shop</span> <span className="details-breadcrumbs-sep">&gt;</span> <span>Men</span> <span className="details-breadcrumbs-sep">&gt;</span> <span className='active'>T-shirts</span>
      </div>
      <div className="details-main">
        <div className="details-images">
          <div className="details-thumbnails">
            {product.images.map((img, i) => (
              <img
                src={img}
                alt="thumb"
                key={i}
                className={`details-thumbnail${mainImgIdx === i ? ' details-thumbnail-active' : ''}`}
                onClick={() => setMainImgIdx(i)}
                style={{ cursor: 'pointer' }}
              />
            ))}
          </div>
          <div className="details-image-main">
            <img src={product.images[mainImgIdx]} alt="main" />
          </div>
        </div>
        <div className="details-info">
          <h1 className="details-title">{product.name}</h1>
          <div className="details-rating-row">
            {[...Array(5)].map((_, i) => {
              if (i < Math.floor(product.rating)) {
                return <Star key={i} size={22} fill="#FFC633" color="#FFC633" />;
              } else if (i === Math.floor(product.rating) && product.rating % 1 >= 0.5) {
                return <StarHalf key={i} size={22} fill="#FFC633" color="#FFC633" />;
              } else {
                return <Star key={i} size={22} color="#E5E5E5" />;
              }
            })}
            <span className="details-rating-value">{product.rating ? product.rating : 'N/A'}/5.0</span>
            <span className="details-reviews-count">({product.reviews ? product.reviews : 0} reviews)</span>
          </div>
          <div className="details-price-row">
            <span className="details-price">${product.price}</span>
            {product.oldPrice && <span className="details-old-price">${product.oldPrice}</span>}
            {product.discount && <span className="details-discount">-{product.discount}%</span>}
          </div>
          <div className="details-desc">{product.description}</div>
          <hr />
          {product.colors && product.colors.length > 0 && (
            <div className="details-colors-row">
              <span className="details-label">Select Colors</span>
              <div className="details-colors">
                {product.colors.map((c, i) => (
                  <span
                    key={i}
                    className={`details-color${selectedColor === c ? ' details-color-active' : ''}`}
                    style={{ background: c, position: 'relative', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
                    onClick={() => setSelectedColor(c)}
                  >
                    {selectedColor === c && (
                      <CheckCircle2 size={22} color="#fff" fill="none" style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', pointerEvents: 'none' }} />
                    )}
                  </span>
                ))}
              </div>
            </div>
          )}
          <hr />
          {product.sizes && product.sizes.length > 0 && (
            <div className="details-sizes-row">
              <span className="details-label">Choose Size</span>
              <div className="details-sizes">
                {product.sizes.map((s, i) => (
                  <button
                    key={i}
                    className={`details-size${selectedSize === s ? ' details-size-active' : ''}`}
                    onClick={() => setSelectedSize(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}
          <div className="details-qty-row">
            <div className="details-qty-ads">
              <button
                className="details-qty-btn"
                onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
                aria-label="Decrease quantity"
              >-</button>
              <span className="details-qty">{qty}</span>
              <button
                className="details-qty-btn"
                onClick={() => setQty(qty + 1)}
                aria-label="Increase quantity"
              >+</button>
            </div>
            <button
              className="details-add-cart"
              onClick={() => {
                if (!product) return;
                addToCart({
                  id: product.id,
                  name: product.name,
                  size: selectedSize,
                  color: selectedColor,
                  price: product.price,
                  image: product.images[mainImgIdx],
                  quantity: qty,
                });
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="details-tabs-row">
        <span className="details-tab">Product Details</span>
        <span className="details-tab details-tab-active">Rating & Reviews</span>
        <span className="details-tab">FAQs</span>
      </div>
      <div className="details-reviews-section">
        <div className="details-reviews-header">
          <span className="details-reviews-title">All Reviews</span>
          <span className="details-reviews-count">({product.reviews})</span>
          <div className="details-reviews-actions">
            <button className='filter'><img src={filter} /></button>
            <select className="details-reviews-sort">
              <option>Latest</option>
              <option>Oldest</option>
            </select>
            <button className="details-reviews-write">Write a Review</button>
          </div>
        </div>
        <div className="details-reviews-list">
          {reviews.map((r, i) => (
            <div className="details-review-card" key={i}>
              <div className="details-review-stars">
                {(() => {
                  if (i === 0) {
                    return [
                      <Star key={0} size={18} fill="#FFC633" color="#FFC633" />, 
                      <Star key={1} size={18} fill="#FFC633" color="#FFC633" />, 
                      <Star key={2} size={18} fill="#FFC633" color="#FFC633" />, 
                      <Star key={3} size={18} fill="#FFC633" color="#FFC633" />, 
                      <StarHalf key={4} size={18} fill="#FFC633" color="#FFC633" />
                    ];
                  } else if (i === 1) {
                    return [
                      <Star key={0} size={18} fill="#FFC633" color="#FFC633" />, 
                      <Star key={1} size={18} fill="#FFC633" color="#FFC633" />, 
                      <Star key={2} size={18} fill="#FFC633" color="#FFC633" />, 
                      <Star key={3} size={18} fill="#FFC633" color="#FFC633" />, 
                      <Star key={4} size={18} color="#E5E5E5" />
                    ];
                  } else if (i === 2) {
                    return [
                      <Star key={0} size={18} fill="#FFC633" color="#FFC633" />, 
                      <Star key={1} size={18} fill="#FFC633" color="#FFC633" />, 
                      <Star key={2} size={18} fill="#FFC633" color="#FFC633" />, 
                      <StarHalf key={3} size={18} fill="#FFC633" color="#FFC633" />, 
                      <Star key={4} size={18} color="#E5E5E5" />
                    ];
                  } else if (i === 3 || i === 4) {
                    return [
                      <Star key={0} size={18} fill="#FFC633" color="#FFC633" />, 
                      <Star key={1} size={18} fill="#FFC633" color="#FFC633" />, 
                      <Star key={2} size={18} fill="#FFC633" color="#FFC633" />, 
                      <Star key={3} size={18} fill="#FFC633" color="#FFC633" />, 
                      <Star key={4} size={18} color="#E5E5E5" />
                    ];
                  } else if (i === 5) {
                    return [
                      <Star key={0} size={18} fill="#FFC633" color="#FFC633" />, 
                      <Star key={1} size={18} fill="#FFC633" color="#FFC633" />, 
                      <Star key={2} size={18} fill="#FFC633" color="#FFC633" />, 
                      <Star key={3} size={18} fill="#FFC633" color="#FFC633" />, 
                      <StarHalf key={4} size={18} fill="#FFC633" color="#FFC633" />
                    ];
                  } else {
                    return [
                      <Star key={0} size={18} fill="#FFC633" color="#FFC633" />, 
                      <Star key={1} size={18} fill="#FFC633" color="#FFC633" />, 
                      <Star key={2} size={18} fill="#FFC633" color="#FFC633" />, 
                      <Star key={3} size={18} fill="#FFC633" color="#FFC633" />, 
                      <Star key={4} size={18} fill="#FFC633" color="#FFC633" />
                    ];
                  }
                })()}
                <div className='options'>
                  <button><img src={option} /></button>
                </div>
              </div>
              <div className="details-review-name-row">
                <div className="details-review-name">{r.name}</div>
                <CheckCircle2 size={18} color="#fff" fill="#22C55E" className="details-review-check" />
              </div>
              <div className="details-review-text">{r.text}</div>
              <div className="details-review-date">Posted on {r.date}</div>
            </div>
          ))}
        </div>
        <button className="details-reviews-load">Load More Reviews</button>
      </div>
      <div className="details-also-like-section">
        <h2 className="details-also-like-title">YOU MIGHT ALSO LIKE</h2>
        <div className="details-also-like-list">
          {alsoLike.map((p, i) => (
            <Link
              key={i}
              to={`/details/${products.find(prod => prod.name === p.name)?.id || ''}`}
              className="details-also-like-link"
              style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              <div className="details-also-like-card">
                <img src={p.img} alt={p.name} className="details-also-like-img" />
              </div>
              <div className="details-also-like-name">{p.name}</div>
              <div className="details-also-like-rating-row">
                {[...Array(5)].map((_, j) => {
                  if (j < Math.floor(p.rating)) {
                    return <Star key={j} size={16} fill="#FFC633" color="#FFC633" />;
                  } else if (j === Math.floor(p.rating) && p.rating % 1 >= 0.5) {
                    return <StarHalf key={j} size={16} fill="#FFC633" color="#FFC633" />;
                  } else {
                    return <Star key={j} size={16} color="#E5E5E5" />;
                  }
                })}
                <span className="details-also-like-rating">{p.rating}/5.0</span>
              </div>
              <div className="details-also-like-price-row">
                <span className="details-also-like-price">${p.price}</span>
                {p.oldPrice && <span className="details-also-like-old-price">${p.oldPrice}</span>}
                {p.discount && <span className="details-also-like-discount">-{p.discount}%</span>}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;