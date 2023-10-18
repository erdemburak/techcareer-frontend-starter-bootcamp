import { Link, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import NotFound from "./pages/NotFound"
import UseEffectOdev7 from "./pages/UseEffectOdev7"
import OrderPage from "./pages/OrderPage"

function App() {


  return (<>

    <ul style={{ display: 'flex', justifyContent: 'space-between' }}>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
      <li><Link to='/customers'>Customers</Link></li>
      <li><Link to='/orderpage'>Orders</Link></li>
      <li><Link to='/suppliersodev'>Suppliers Odev</Link></li>
    </ul>

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/orderpage" element={<OrderPage />} />
      <Route path="/suppliersodev" element={<UseEffectOdev7 />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  </>)

}

export default App