
import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import {useRef} from "react";
import ImageCard from "./ImageCard.jsx";


const data = [

    {
        image:"gym/image1.jpg",
        heading: 'Keep Your Body',
        title:'Burning',
        text:'Get ready to burn off some serious fat with our high quality products.'


    },
    {
        image:"gym/image2.jpg",
        heading: 'Just Believe In ',
        title:'Yourself',
        text:'We are here to  you achieve your goals.'


    },
    {
        image:"gym/image3.jpg",
        heading: 'Grow Your Body',
        title:'Strength',
        text:'Make your body  stronger with our quality products'


    },

];
const GetStart = () => {
    const autoplay = useRef(Autoplay({ delay: 2000 }))
    return (
        <Carousel
            height={400}
            align="center"
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
            loop
        >

            <>
                {
                    data.map((item,index)=>(
                        <Carousel.Slide key={index} className={"w-full h-[70vh]"}>
                            <ImageCard data={item}/>
                        </Carousel.Slide>
                    ))
                }
            </>

        </Carousel>
    );
};

export default GetStart;
