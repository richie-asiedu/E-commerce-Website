import { Routes, Route } from 'react-router-dom'
import Navbar from '@/components/Navbar/Navbar'
import Home from '@/pages/Home/Home'
import Details from '@/pages/Details/Details'
import Categories from '@/pages/Categories/Categories'
import Cart from '@/pages/Cart/Cart'
import Payment from '@/pages/Payment/Payment'
import Newsletter from '@/components/Newsletter/Newsletter'
import Footer from '@/components/Footer/Footer'


function App() {

  return (
    <>
    <Navbar />
      <div className=" px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] xl:px-[11vw]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
        <Newsletter />
        <Footer />
      </div>
    </>
  )
}

export default App
