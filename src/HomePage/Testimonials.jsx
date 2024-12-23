

import {Carousel} from "@mantine/carousel";

import TestiMonalsCard from "./TestiMonalsCard.jsx";

const testimonials=[
    {
        avatar:"avatar",
        name: "Smarika Bist",
        review: "This job portal made job search easy and quick. Recommended to all job seekers!",
        rating:4
    },

    {
        avatar:"avatar1",
        name: "Laxmal Pandey",
        review: "Found my dream job within a week! The application process was smooth.",
        rating:4.5
    },
    {
        avatar:"avatar2",
        name: "Shreya Jain",
        review: "I secured a job offer within days of applying. Exceptional user experience and support.",
        rating:5
    },
    {
        avatar:"avatar1",
        name: "Kb",
        review: "Highly efficient job portal with excellent resources. Helped me land a great position.",
        rating:4.5
    },
    {
        avatar:"avatar2",
        name: "Kabita",
        review: "I secured a job offer within days of applying. Exceptional user experience and support.",
        rating:5
    },
    {
        avatar:"avatar1",
        name: "Ram",
        review: "Highly efficient job portal with excellent resources. Helped me land a great position.",
        rating:4.5
    },
]
const Testimonials=()=>{
    return(<div className=" w-full my-10 px-12">
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