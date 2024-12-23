import React from "react";

import {Button,Text} from "@mantine/core";
const plans = [
    {
        name: "Basic Plan",
        price: 25,
        features: [
            "2 hours of exercises",
            "Free consultation to coaches",
            "Access to The Community",
        ],
        moreBenefits: "See more benefit",
        buttonText: "Get Started",

    },
    {
        name: "Premium Plan",
        price: 30,
        features: [
            "5 hours of exercises",
            "Free consultation of Coaches",
            "Access to minibar",
        ],
        moreBenefits: "See more benefit",
        buttonText: "Get Started",
    },
    {
        name: "Pro Plan",
        price: 45,
        features: [
            "8 hours of exercises",
            "Consultation of Private Coach",
            "Free Fitness Merchandises",
        ],
        moreBenefits: "See more benefit",
        buttonText: "Get Started",

    },
];

const PricingCards = () => {
    return (
        <div className="mt-16 px-6">
            <div className="text-5xl my-10 text-center text-mine-shaft-100">
                Ready To Start{" "}
                <span className="text-fuchsia-pink-400">Your Journey</span> With Us Now
            </div>
            <div className="mx-auto grid max-w-[95%] grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className="group bg-mine-shaft-800 px-6 py-8 rounded-lg shadow-lg h-full transition-transform hover:-translate-y-1 hover:bg-fuchsia-800"
                    >

                        <h2 className="text-2xl font-semibold text-mine-shaft-200">
                            {plan.name}
                        </h2>
                        <p className="text-3xl font-bold mt-4 text-mine-shaft-200">
                            $ {plan.price}
                        </p>
                        <ul className="mt-4 space-y-2 text-mine-shaft-100">
                            {plan.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 "
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <div className="mt-4 text-mine-shaft-200 cursor-pointer">{plan.moreBenefits} →</div>
                        <Button className="mt-6 px-4 py-2 rounded-lg font-bold w-full text-fuchsia-pink-400 border border-fuchsia-pink-400 hover:text-white hover:bg-fuchsia-pink-400">
                            {plan.buttonText}
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PricingCards;
