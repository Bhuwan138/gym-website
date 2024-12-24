import React from "react";
import { motion } from "framer-motion";
import { Button } from "@mantine/core";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, EffectCoverflow, Mousewheel, Pagination} from "swiper/modules";

const plans = [
    {
        name: "Basic Plan",
        price: 25,
        features: ["2 hours of exercises", "Free consultation to coaches", "Access to The Community"],
        moreBenefits: "See more benefits",
        buttonText: "Get Started",
    },
    {
        name: "Premium Plan",
        price: 30,
        features: ["5 hours of exercises", "Free consultation of Coaches", "Access to minibar"],
        moreBenefits: "See more benefits",
        buttonText: "Get Started",
    },
    {
        name: "Pro Plan",
        price: 45,
        features: ["8 hours of exercises", "Consultation of Private Coach", "Free Fitness Merchandise"],
        moreBenefits: "See more benefits",
        buttonText: "Get Started",
    },
];

const cardVariants = {
    initial: {
        opacity: 0,
        scale: 0.8,
        y: 50,
    },
    animate: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.5,
            type: "spring",
            stiffness: 80,
        },
    },
    hover: {
        scale: 1.1,
        rotateY: 10,
        boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.2)",
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 12,
        },
    },
};

const PricingCards = () => {
    return (
        <div className="mt-16 px-6">
            <motion.div
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.8}}
                className="text-5xl my-10 text-center text-mine-shaft-100"
            >
                Ready To Start <span className="text-fuchsia-pink-400">Your Journey</span> With Us Now
            </motion.div>
            <motion.div className=" w-full"
                        initial="initial"
                        animate="animate"
                        transition={{ staggerChildren: 0.2 }}
            >

                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    mousewheel={true}
                    loop={true}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                        slideShadows: true,
                    }}
                    // autoplay={{
                    //     delay: 1000,
                    //     disableOnInteraction: false,
                    // }}
                    pagination={{el: '.swiper-pagination', clickable: true}}

                    modules={[EffectCoverflow, Pagination, Autoplay, Mousewheel]}
                    className="swiper-container"
                >
                    {plans.map((plan, index) => (
                        <SwiperSlide
                            key={index}
                            style={{
                                width: "300px",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",

                            }}

                        >
                            <motion.div key={index}
                                className="group bg-mine-shaft-800 px-6 py-8 rounded-lg shadow-lg h-full hover:bg-fuchsia-700 transition-transform"
                                        whileHover="hover"
                                        variants={cardVariants}
                                        style={{
                                            perspective: 1000,
                                            transformStyle: "preserve-3d",
                                            borderRadius: "15px",
                                        }}

                            >
                                <h2 className="text-2xl font-semibold text-mine-shaft-200">{plan.name}</h2>
                                <p className="text-3xl font-bold mt-4 text-mine-shaft-200">$ {plan.price}</p>
                                <ul className="mt-4 space-y-2 text-mine-shaft-100">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <motion.div className="mt-4 text-mine-shaft-200 cursor-pointer"
                                            whileHover={{
                                                scale: 1.1,
                                                color: "#FF80BF",
                                            }}
                                >
                                    {plan.moreBenefits} →
                                </motion.div>
                                <div>
                                    <Button
                                        className="mt-6 px-4 py-2 rounded-lg font-bold w-full text-fuchsia-pink-400 border border-fuchsia-pink-400 hover:text-white hover:bg-fuchsia-pink-400"
                                    >
                                        {plan.buttonText}
                                    </Button>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}


                </Swiper>


            </motion.div>
            <div className="swiper-container">
                <div className="swiper-pagination "></div>
            </div>
        </div>
    );
};

export default PricingCards;
