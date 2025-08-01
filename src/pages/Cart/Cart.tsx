import './Cart.css';
import { useCartStore } from '@/store/cartStore';
import { useEffect } from 'react';
import RFC from '@/assets/RFC.png';
import Prm from '@/assets/Prm.png';
import { products } from '@/data/products';


const Cart = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  const cartItems = useCartStore((state) => state.cartItems);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = Math.round(subtotal * 0.2);
  const delivery = cartItems.length > 0 ? 15 : 0;
  const total = subtotal - discount + delivery;

  return (
    <div className="cart-page-main">
      <div className="cart-breadcrumb">
        Home &gt; <span className="cart-breadcrumb-current">Cart</span>
      </div>
      <h1 className="cart-title">YOUR CART</h1>
      <div className="cart-content-row">
        <div className="cart-items-list">
          {cartItems.map(item => (
            <div key={`${item.id}-${item.size}-${item.color}`} className="cart-item-row">
              <div className="cart-item-img-wrap">
                <img src={item.image} alt={item.name} className="cart-item-img" />
              </div>
              <div className="cart-item-info">
                <div className="cart-item-name">{item.name}</div>
                <div className="cart-item-size">Size: {item.size}</div>
                <div className="cart-item-color">Color: {(() => {
                  const prod = products.find(p => p.id === item.id);
                  if (!prod || !prod.colors) return item.color;
                  const colorNames: Record<string, string> = {
                    '#F35528': 'Orange',
                    '#F16F54': 'Red',
                    '#FAA356': 'Yellow',
                    '#2FCB6F': 'Green',
                    '#5386E4': 'Blue',
                    '#242424': 'Black',
                    '#fff': 'White',
                    '#314F4A': 'Teal',
                    '#E0C097': 'Beige',
                    '#A3B18A': 'Olive',
                  };
                  return colorNames[item.color] || item.color;
                })()}</div>
                <div className="cart-item-price">${item.price}</div>
              </div>
              <div className="cart-item-actions">
                <button
                  className="cart-remove-btn"
                  title="Remove from cart"
                  onClick={() => removeFromCart(item.id, item.size, item.color)}
                >
                  <img src={RFC} alt="Remove" style={{width: 20, height: 20}} />
                </button>
                <div className="cart-item-qty-row">
                  <button
                    className="cart-qty-btn"
                    onClick={() => updateQuantity(item.id, item.size, item.color, -1)}
                  >-</button>
                  <span className="cart-qty-value">{item.quantity}</span>
                  <button
                    className="cart-qty-btn"
                    onClick={() => updateQuantity(item.id, item.size, item.color, 1)}
                  >+</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <div className="cart-summary-title">Order Summary</div>
          <div className="cart-summary-row">
            <span>Subtotal</span>
            <span className="cart-summary-value">${subtotal}</span>
          </div>
          <br />
          <div className="cart-summary-row">
            <span>Discount (-20%)</span>
            <span className="cart-summary-discount">- ${discount}</span>
          </div>
          <br />
          <div className="cart-summary-row">
            <span>Delivery Fee</span>
            <span className="cart-summary-value">${delivery}</span>
          </div>
          <br />
          <hr className="cart-summary-hr" />
          <div className="cart-summary-row cart-summary-total-row">
            <span>Total</span>
            <span className="cart-summary-total">${total}</span>
          </div>
          <div className="cart-summary-promo-row" style={{position: 'relative', display: 'flex', alignItems: 'center'}}>
            <input type="text" placeholder="Add promo code" className="cart-promo-input" style={{paddingLeft: 36}} />
            <img src={Prm} alt="Promo" style={{width: 18, height: 18, position: 'absolute', left: 15, top: '50%', transform: 'translateY(-30%)'}} />
            <button className="cart-promo-btn">Apply</button>
          </div>
          <button className="cart-checkout-btn">
            Go to Checkout <span className="cart-checkout-arrow">&rarr;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;