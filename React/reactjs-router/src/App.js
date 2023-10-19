import { Link, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import NotFound from "./pages/NotFound"
import UseEffectOdev7 from "./pages/UseEffectOdev7"
import OrderPage from "./pages/OrderPage"
import "./App.css";

function App() {


  return (<>

    <ul style={{ display: 'flex', justifyContent: 'space-between' }}>
      <li><Link className="link-element" to='/'>Home</Link></li>
      <li><Link className="link-element" to='/about'>About</Link></li>
      <li><Link className="link-element" to='/contact'>Contact</Link></li>
      <li><Link className="link-element" to='/customers'>Customers</Link></li>
      <li><Link className="link-element" to='/orderpage'>Orders(Odev8/2 Date)</Link></li>
      <li><Link className="link-element" to='/suppliersodev'>Odev8 Suppliers</Link></li>
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