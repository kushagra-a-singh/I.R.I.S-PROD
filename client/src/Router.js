import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Event from './pages/Events';
import Event1 from './pages/Event1';
import Event2 from './pages/Event2';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/policy';
import Refund from './pages/refund';
import Terms from './pages/terms';
import Blog from './pages/Blog';
//import PaymentSuccess from './pages/PaymentSuccess';
import ScrollToTop from './ScrollToTop';
import { Gallery } from './pages/Gallery';
//import CheckoutPayment from './pages/paymentCheckout';
import Projects from './pages/Projects';
import Projects1 from './pages/Projects1';
import { TarzanProject } from './pages/ProjectFiles/Tarzan/TarzanProject';
import Recruitment from './pages/recruitment';
import TakshDhabalia from './portfolio/TakshDhabalia'
import KushagraSingh from './portfolio/KushagraSingh';
import BrandonCerejo from './portfolio/BrandonCerejo';

function AppRouter() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Event />} />
        <Route path="/events/1" element={<Event1 />} />
        <Route path="/events/2" element={<Event2 />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/terms" element={<Terms />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/projects' element={<Projects />} />
        <Route path="/projects/1" element={<Projects1 />} />
        <Route path='/projects/2' element={<TarzanProject />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/recruitment' element={<Recruitment />} />
        <Route path="/portfolio/TakshDhabalia" element={<TakshDhabalia />} />
        <Route path="/portfolio/KushagraSingh" element={<KushagraSingh />} />
        <Route path="/portfolio/BrandonCerejo" element={<BrandonCerejo />} />
        {/* <Route path="/PaymentSuccess" element={<PaymentSuccess />} />
        <Route path="/checkoutPayment" element={<CheckoutPayment />} /> */}
      </Routes>
    </>
  );
}

export default AppRouter;
