import { useState } from 'react'
import { useEffect } from 'react'
import { Search,  ChevronDown} from 'lucide-react'
import { Link } from 'react-router-dom';
import './Navbar.css'
import User from '@/assets/user.png'
import Cart from '@/assets/cart.png'
import Logo from '@/assets/logo.png'
import { useCartStore } from '@/store/cartStore';
import { products } from '@/data/products';

const Navbar = () => {
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showMobileSearch, setShowMobileSearch] = useState(false)
  const [searchValue, setSearchValue] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 912);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const cartItems = useCartStore((state) => state.cartItems);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);


  const filteredProducts = searchValue.trim()
    ? products.filter(p =>
        p.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    : [];

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <button
          className="navbar-hamburger"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Open menu"
        >
          <span />
          <span />
          <span />
        </button>
        <Link to="/" className="navbar-logo-link">
          <img src={Logo} alt='logo' className="navbar-logo" />
        </Link>
        <div className={`navbar-links${isMobileMenuOpen ? ' open' : ''}`}> 
          <div className="navbar-dropdown">
            <button
              className="navbar-link flex items-center gap-1"
              tabIndex={0}
              aria-haspopup="true"
              aria-expanded={isShopDropdownOpen}
              onClick={() => setIsShopDropdownOpen((open) => !open)}
              onBlur={() => setTimeout(() => setIsShopDropdownOpen(false), 150)}
            >
              Shop <ChevronDown className="w-4 h-4" />
            </button>
            {!isMobile && isShopDropdownOpen && (
              <div className="navbar-dropdown-menu navbar-dropdown-absolute">
                <a href="#" className="navbar-dropdown-item">All Products</a>
                <a href="#" className="navbar-dropdown-item">Men</a>
                <a href="#" className="navbar-dropdown-item">Women</a>
                <a href="#" className="navbar-dropdown-item">Accessories</a>
              </div>
            )}
          </div>
          {isMobileMenuOpen && isMobile && isShopDropdownOpen && (
            <div className="navbar-dropdown-menu">
              <a href="#" className="navbar-dropdown-item">All Products</a>
              <a href="#" className="navbar-dropdown-item">Men</a>
              <a href="#" className="navbar-dropdown-item">Women</a>
              <a href="#" className="navbar-dropdown-item">Accessories</a>
            </div>
          )}
          <a href="#" className="navbar-link">On Sale</a>
          <a href="#" className="navbar-link">New Arrivals</a>
          <a href="#" className="navbar-link">Brands</a>
        </div>
        <div className="navbar-search-wrap">
          <div className="navbar-search">
            <button
              className="navbar-search-icon"
              style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
              aria-label="Open search"
              onClick={() => isMobile ? setShowMobileSearch(true) : null}
            >
              <Search />
            </button>
            {!isMobile && (
              <>
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="navbar-search-input"
                  value={searchValue}
                  onChange={e => setSearchValue(e.target.value)}
                  onFocus={() => setShowMobileSearch(false)}
                />
                {searchValue && (
                  <div className="navbar-search-dropdown">
                    {filteredProducts.length > 0 ? (
                      filteredProducts.map(product => (
                        <Link
                          key={product.id}
                          to={`/details/${product.id}`}
                          className="navbar-search-result"
                          onClick={() => setSearchValue("")}
                        >
                          <img src={product.images[0]} alt={product.name} className="navbar-search-result-img" />
                          <span>{product.name}</span>
                        </Link>
                      ))
                    ) : (
                      <div className="navbar-search-no-result">No Product Found.</div>
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        <div className="navbar-icons">
          <Link to="/cart" className="navbar-icon-btn" style={{ position: 'relative' }}>
            <img src={Cart} alt='cart' />
            {cartCount > 0 && (
              <span className="navbar-cart-badge">{cartCount}</span>
            )}
          </Link>
          <Link to="/profile" className="navbar-icon-btn">
            <img src={User} alt='user' />
          </Link>
        </div>
        {showMobileSearch && (
          <div className="mobile-search-modal" onClick={() => setShowMobileSearch(false)}>
            <div className="mobile-search-box" onClick={e => e.stopPropagation()}>
              <input
                className="mobile-search-input"
                type="text"
                autoFocus
                placeholder="Search for products..."
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
              />
              {searchValue && (
                <div className="mobile-search-dropdown">
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                      <Link
                        key={product.id}
                        to={`/details/${product.id}`}
                        className="navbar-search-result"
                        onClick={() => {
                          setShowMobileSearch(false);
                          setSearchValue("");
                        }}
                      >
                        <img src={product.images[0]} alt={product.name} className="navbar-search-result-img" />
                        <span>{product.name}</span>
                      </Link>
                    ))
                  ) : (
                    <div className="navbar-search-no-result">No Product Found.</div>
                  )}
                </div>
              )}
              <button className="mobile-search-close" onClick={() => setShowMobileSearch(false)}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar