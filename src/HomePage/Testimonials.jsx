

import { Carousel } from "@mantine/carousel";

import TestiMonalsCard from "./TestiMonalsCard.jsx";

const testimonials = [
    {
        avatar: "avatar",
        name: "Smarika Bist",
        review: "Joining this gym was the best decision of my life! The trainers are amazing, and the programs are tailored to your goals. I've never felt stronger or healthier",
        rating: 4
    },

    {
        avatar: "avatar1",
        name: "Laxmal Pandey",
        review: "The community here is incredible! Everyone is so supportive, and the trainers genuinely care about your progress. It's not just a gym, it's a lifestyle",
        rating: 4.5
    },
    {
        avatar: "avatar2",
        name: "Shreya Jain",
        review: "State-of-the-art equipment, a clean and friendly environment, and a variety of classes make this gym stand out. Highly recommended!",
        rating: 5
    },
    {
        avatar: "avatar1",
        name: "Kb",
        review: "The personal training sessions are game-changing! My coach has helped me achieve things I never thought possible. I've lost 20 pounds in three months",
        rating: 4.5
    },
    {
        avatar: "avatar2",
        name: "Kabita",
        review: "Every time I walk into the gym, I feel motivated to push myself. The music, the energy, and the staff create the perfect workout vibe.",
        rating: 5
    },
    {
        avatar: "avatar1",
        name: "Ram",
        review: "I love the group classes here! They are fun, challenging, and perfect for all fitness levels. The yoga sessions are my favorite.",
        rating: 4.5
    },
]
const Testimonials = () => {
    return (<div className=" w-full my-10 px-12">
        <div className="text-5xl text-mine-shaft-100 text-center">
            What <span className="text-fuchsia-pink-400 leading-tight">User</span> says about us ?
        </div>

        <Carousel
            height={200}
            slideSize="25%"
            slideGap="sm"
            loop
            align="start"
            className=" my-10"
        >
            <>
                {testimonials.map((item, index) => (
                    <Carousel.Slide key={index} >
                        <TestiMonalsCard item={item} />
                    </Carousel.Slide>
                ))}
            </>
        </Carousel>


    </div>)
}
export default Testimonials