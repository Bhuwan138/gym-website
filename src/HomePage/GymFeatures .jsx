import React from "react";
import { motion } from "framer-motion";

const features = [
    {
        title: "State-of-the-Art Equipment",
        description: "Experience world-class equipment designed to help you achieve peak performance in every workout.",
        icon: "💪",
    },
    {
        title: "Certified Trainers",
        description: "Get guidance from certified and experienced trainers who are dedicated to your success.",
        icon: "🏋️",
    },
    {
        title: "Flexible Membership Plans",
        description: "Choose from a variety of plans that fit your schedule and fitness goals.",
        icon: "📅",
    },
    {
        title: "Group Classes",
        description: "Stay motivated with a variety of engaging classes, including yoga, Zumba, and HIIT.",
        icon: "🧘",
    },
    {
        title: "Wellness & Nutrition Support",
        description: "Receive expert advice on nutrition and wellness to complement your workout routine.",
        icon: "🥗",
    },
    {
        title: "24/7 Access",
        description: "Work out on your schedule with round-the-clock access to our facilities.",
        icon: "⏰",
    },
];

const cardVariants = {
    hover: {
        scale: 1.1,
        transition: { type: "spring", stiffness: 300 },
    },
};

const GymFeatures = () => {
    return (
        <section className="mt-16 px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
                Why Choose <span className="text-fuchsia-pink-400">Our Gym?</span>
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        className="bg-mine-shaft-800 rounded-lg p-6 shadow-lg text-mine-shaft-200 "
                        whileHover="hover"
                        variants={cardVariants}
                    >
                        <div className="text-5xl mb-4">{feature.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-sm">{feature.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default GymFeatures;
