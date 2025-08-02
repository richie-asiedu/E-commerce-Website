import filter from '@/assets/D filter.png';
import './Categories.css';
import { useState, useEffect } from 'react';
import arrowL from '@/assets/arrow L.png';
import arrowR from '@/assets/arrow R.png';
import { Link } from 'react-router-dom';
import { products } from '@/data/products';

const Categories = () => {

  const [open, setOpen] = useState({
    categories: true,
    price: true,
    colors: true,
    size: true,
    dress: true,
    categoriesChildren: [false, false, false, false, false],
    dressChildren: [false, false, false, false],
  });

  const [selectedSize, setSelectedSize] = useState('Large');

  const toggle = (key: keyof typeof open) => setOpen(o => ({ ...o, [key]: !o[key] }));
  const toggleChild = (group: 'categoriesChildren' | 'dressChildren', idx: number) =>
    setOpen(o => ({ ...o, [group]: o[group].map((v: boolean, i: number) => i === idx ? !v : v) }));


  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 915);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="categories-container">
      {(!isMobile || showMobileFilter) && (
        <aside className="categories-filter" style={isMobile ? {position:'fixed',bottom:0,left:0,width:'100vw',height:'80vh',background:'#fff',zIndex:1000,borderRadius:30,overflowY:'auto',display:showMobileFilter?'flex':'none'} : {}}>
          <div className="filter-title" style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:8,marginTop:-20}}>
            <span>Filters</span>
            <img src={filter} alt="filter icon" style={{width:24,height:24}} />
            {isMobile && (
              <button onClick={()=>setShowMobileFilter(false)} style={{background:'none',border:'none',fontSize:34,marginLeft:2,cursor:'pointer'}} aria-label="Close filter">&times;</button>
            )}
          </div>
          <hr />
          <div className="filter-group">
            <div className="filter-label filter-label-header" onClick={() => toggle('categories')} style={{cursor:'pointer'}}>
              <span>Categories</span>
              <span className="dropdown-arrow header" style={{transform: open.categories ? 'rotate(90deg)' : 'rotate(0deg)'}}>&#8250;</span>
            </div>
            {open.categories && (
              <ul className="filter-list">
                {['T-shirts','Shoes','Shirts','Hoodie','Jeans'].map((cat, i) => (
                  <li key={cat} style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                    <span>{cat}</span>
                    <span
                      className="dropdown-arrow child"
                      style={{transform: open.categoriesChildren[i] ? 'rotate(90deg)' : 'rotate(0deg)', cursor:'pointer'}}
                      onClick={e => { e.stopPropagation(); toggleChild('categoriesChildren', i); }}
                    >
                      ›
                    </span>
                  </li>
                ))}
              </ul>
            )}
            <hr className="filter-hr" />
          </div>
          <div className="filter-group">
            <div className="filter-label filter-label-header" onClick={() => toggle('price')} style={{cursor:'pointer'}}>
              <span>Price</span>
              <span className="dropdown-arrow header" style={{transform: open.price ? 'rotate(90deg)' : 'rotate(0deg)'}}>&#8250;</span>
            </div>
            {open.price && (
              <div className="filter-slider">
                <input type="range" min="50" max="520" />
                <div className="filter-price-range">
                  <span>$50</span>
                  <span>$520</span>
                </div>
              </div>
            )}
            <hr className="filter-hr" />
          </div>
          <div className="filter-group">
            <div className="filter-label filter-label-header" onClick={() => toggle('colors')} style={{cursor:'pointer'}}>
              <span>Colors</span>
              <span className="dropdown-arrow header" style={{transform: open.colors ? 'rotate(90deg)' : 'rotate(0deg)'}}>&#8250;</span>
            </div>
            {open.colors && (
              <div className="filter-colors">
                {['#00C12B','#F50606','#F5DD06','#F57906', '#06CAF5','#063AF5','#7D06F5','#F506A4', '#ffffff','#000000'].map((color, i) => (
                  <span key={i} className="color-dot" style={{background: color, border: color === '#fff' ? '1px solid #ccc' : 'none'}}></span>
                ))}
              </div>
            )}
            <hr className="filter-hr" />
          </div>
          <div className="filter-group">
            <div className="filter-label filter-label-header" onClick={() => toggle('size')} style={{cursor:'pointer'}}>
              <span>Size</span>
              <span className="dropdown-arrow header" style={{transform: open.size ? 'rotate(90deg)' : 'rotate(0deg)'}}>&#8250;</span>
            </div>
            {open.size && (
              <div className="filter-sizes">
                {['XX Small','X Small','Small','Medium','Large','X Large','XX Large','3X Large','4X Large'].map((size, i) => (
                  <button
                    key={i}
                    className={`size-btn${selectedSize===size?' selected':''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            )}
            <hr className="filter-hr" />
          </div>
          <div className="filter-group">
            <div className="filter-label filter-label-header" onClick={() => toggle('dress')} style={{cursor:'pointer'}}>
              <span>Dress Style</span>
              <span className="dropdown-arrow header" style={{transform: open.dress ? 'rotate(90deg)' : 'rotate(0deg)'}}>&#8250;</span>
            </div>
            {open.dress && (
              <ul className="filter-list">
                {['Casual','Formal','Party','Gym'].map((style, i) => (
                  <li key={style} style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                    <span>{style}</span>
                    <span
                      className="dropdown-arrow child"
                      style={{transform: open.dressChildren[i] ? 'rotate(90deg)' : 'rotate(0deg)', cursor:'pointer'}}
                      onClick={e => { e.stopPropagation(); toggleChild('dressChildren', i); }}
                    >
                      ›
                    </span>
                  </li>
                ))}
              </ul>
            )}
            <hr className="filter-hr" />
          </div>
          <button className="apply-filter-btn">Apply Filter</button>
        </aside>
      )}
      <main className="categories-main">
        <div className="categories-breadcrumb">Home &gt; <span>Casual</span></div>
        <div className="categories-header-row" style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:8}}>
          <h2 className="categories-title">Casual</h2>
          <div style={{display:'flex',alignItems:'center',gap:8}}>
            <span className="categories-sort-row">
              <span>Showing 1-13 of 100 Products</span>
              <span className='sort'>Sort by: <b>Most Popular</b> ▼</span>
            </span>
            {isMobile && (
              <button
                className="mobile-filter-btn"
                style={{background:'none',border:'none',padding:0,marginRight:8,display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer'}}
                onClick={()=>setShowMobileFilter(true)}
                aria-label="Open filter"
              >
                <img src={filter} alt="filter icon" style={{width:28,height:28}} />
              </button>
            )}
          </div>
        </div>
        <div className="categories-grid">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/details/${product.id}`}
              className="categories-product-card-outer"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="categories-product-card">
                <div className="categories-product-img-wrap">
                  <img src={product.images[0]} alt={product.name} />
                </div>
              </div>
              <div className="categories-product-info">
                <div className="categories-product-name">{product.name}</div>
                <div className="categories-product-rating">
                  {[...Array(5)].map((_, idx) => {
                    const full = idx < Math.floor(product.rating);
                    const half = !full && idx < product.rating;
                    return (
                      <span
                        key={idx}
                        className="star"
                        style={{ color: full || half ? '#FFA800' : '#E0E0E0', position: 'relative', display: 'inline-block', width: '1em' }}
                      >
                        {full ? '★' : half ? (
                          <>
                            <span style={{position:'absolute',overflow:'hidden',width:'50%',color:'#FFA800',left:0,top:0}}>★</span>
                            <span style={{color:'#E0E0E0'}}>★</span>
                          </>
                        ) : '★'}
                      </span>
                    );
                  })}
                  <span style={{color:'#00000060',fontWeight:500,marginLeft:6}}>{product.rating}/5</span>
                </div>
                <div className="categories-product-price-row">
                  <span className="categories-product-price">${product.price}</span>
                  {product.oldPrice && <span className="categories-product-old-price">${product.oldPrice}</span>}
                  {product.discount && <span className="categories-product-sale">-{product.discount}%</span>}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <hr />
        <div className="categories-pagination">
          <button className="pagination-btn">
            <img src={arrowL} alt="Previous" style={{width:11.67,height:11.67,verticalAlign:'middle',marginRight:6}} />
            Previous
          </button>
          <div className="pagination-pages">
            {[1,2,3,'...',9,10].map((p,i) => (
              <button key={i} className={`pagination-page${p===1?' active':''}`}>{p}</button>
            ))}
          </div>
          <button className="pagination-btn">
            Next
            <img src={arrowR} alt="Next" style={{width:11.67,height:11.67,verticalAlign:'middle',marginLeft:6}} />
          </button>
        </div>
      </main>
    </div>
  );
}

export default Categories 