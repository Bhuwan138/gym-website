import './App.css'

import Header from "./HomePage/Header.jsx";
import GetStart from "./HomePage/GetStart.jsx";
import Services from "./HomePage/Services.jsx";
import PricingCards from "./HomePage/PricingCards.jsx";
import Testimonials from "./HomePage/Testimonials.jsx";
import FAQAccordion from "./HomePage/Faq.jsx";
import Subscription from "./HomePage/Subscription.jsx";


function App() {

  return (
      <div className="min-h-screen font-['poppins'] bg-mine-shaft-950 pb-20">
          <Header/>
         <GetStart/>
          <Services/>
          <PricingCards/>
          <Testimonials/>
          <FAQAccordion/>
          <Subscription/>
      </div>

  )
}

export default App
