import './App.css';

import Header from "./HomePage/Header.jsx";
import GetStart from "./HomePage/GetStart.jsx";
import Services from "./HomePage/Services.jsx";
import PricingCards from "./HomePage/PricingCards.jsx";
import Testimonials from "./HomePage/Testimonials.jsx";
import FAQAccordion from "./HomePage/Faq.jsx";
import Subscription from "./HomePage/Subscription.jsx";
import Footer from "./HomePage/Footer.jsx";

import { motion, useScroll, useTransform } from "framer-motion";
import GymFeatures from './HomePage/GymFeatures .jsx';
import Locations from './HomePage/Locations.jsx';

function App() {
    const { scrollY } = useScroll();

    // Parallax effects for each section
    const headerY = useTransform(scrollY, [0, 300], [0, -100]); // Header moves up
    const getStartY = useTransform(scrollY, [300, 600], [0, -50]); // GetStarted section moves slightly
    const servicesY = useTransform(scrollY, [600, 900], [0, -70]); // Services section moves slightly more
    const pricingY = useTransform(scrollY, [900, 1200], [0, -40]); // Pricing section moves slightly
    const testimonialsY = useTransform(scrollY, [1200, 1500], [0, -30]); // Testimonials section moves slightly
    const faqY = useTransform(scrollY, [1500, 1800], [0, -20]); // FAQ section moves slightly
    const subscriptionY = useTransform(scrollY, [1800, 2100], [0, -50]); // Subscription section moves more
    const footerY = useTransform(scrollY, [2100, 2400], [0, -10]); // Footer section moves slightly

    return (
        <div className="min-h-screen font-['poppins'] bg-mine-shaft-950 pb-20">
            <motion.div style={{ y: headerY }}>
                <Header />
            </motion.div>

            <motion.div style={{ y: getStartY }}>
                <GetStart />
            </motion.div>

            <motion.div style={{ y: servicesY }}>
                <Services />
            </motion.div>

            <motion.div style={{ y: pricingY }}>
                <PricingCards />
            </motion.div>

            <GymFeatures />

            <motion.div style={{ y: testimonialsY }}>
                <Testimonials />
            </motion.div>

            <motion.div style={{ y: faqY }}>
                <FAQAccordion />
            </motion.div>

            <Locations />

            <motion.div style={{ y: subscriptionY }}>
                <Subscription />
            </motion.div>

            <motion.div style={{ y: footerY }}>
                <Footer />
            </motion.div>
        </div>
    );
}

export default App;
