
import React from 'react';
import {Accordion, Divider} from '@mantine/core';

const faqs = [
    {
        question: "What is KlumFit?",
        answer:
            "KlumFit is Nepal’s First GYM Network, where you can access gyms everywhere you go with just 1 subscription.",
    },
    {
        question: "How does the subscription work?",
        answer:
            "You can subscribe to our membership plan and gain access to all partner gyms in our network without any additional cost.",
    },
    {
        question: "What are the benefits of joining KlumFit?",
        answer:
            "Access to multiple gyms, affordable pricing, and flexible workout schedules tailored to your convenience.",
    },
];

const FAQAccordion = () => {
    return (
        <div className="max-w-full mt-10 p-6 rounded-lg">
            <h2 className="text-3xl text-white font-bold mb-6 text-center">
                Frequently <span className="text-fuchsia-pink-400">Asked</span> Questions
            </h2>
            <Accordion
              className="bg-mine-shaft-800 "
                variant="contained"

            >
                {faqs.map((faq, index) => (
                    <>
                        <Accordion.Item value={index.toString()} key={index}  className="bg-mine-shaft-800  mt-5">
                            <Accordion.Control>{` ${faq.question}`}</Accordion.Control>
                            <Accordion.Panel >{faq.answer}</Accordion.Panel>
                        </Accordion.Item>
                        <Divider color={"mineShaft.5"} size={'md'}/>
                    </>
                ))}
            </Accordion>
        </div>
    );
};

export default FAQAccordion;
