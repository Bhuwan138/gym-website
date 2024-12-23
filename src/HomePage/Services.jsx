import {IconCircleCheck, IconCircleDashedNumber1, IconPlayerPause,IconArrowRight} from "@tabler/icons-react";
import {ActionIcon, Button} from "@mantine/core";


const Services=()=>{
    const services = [
        {
            id: 1,
            icon: <IconCircleDashedNumber1 stroke={1.5} className="h-10 w-10 text-fuchsia-pink-400" />,
            title: "Single Subscription",
            desc: "Access to GYM Everywhere Near You With Single KlumFit Subscription",
        },
        {
            id: 2,
            icon: <IconCircleCheck  stroke={1.5}  className="h-10 w-10 text-fuchsia-pink-400"/>,
            title: "No Registration Fees",
            desc: "The Moment You Subscribe KlumFit Package, same moment you start getting access to GYM",
        },
        {
            id: 3,
            icon: <IconPlayerPause  stroke={1.5} className="h-10 w-10 text-fuchsia-pink-400" />,
            title: "Pause Subscription",
            desc: "If Emergency Occurs, KlumFit pause your Subscriptions.",
        },
    ];

    return(
    <div>
        <div className="flex  flex-col   justify-center mt-10 gap-2 items-center mb-10">
            <div className="text-5xl font-semibold text-mine-shaft-100">What We <span
                className="text-fuchsia-pink-400">Offer</span> For You
            </div>
            <div className="max-w-[54%] text-center text-mine-shaft-300 font-semibold tracking-wide">The gym is not just
                a place to work out; its a space to push your limits, build strength, and transform your body and mind.
            </div>

        </div>
        <div className="flex  flex-col  gap-8 md:flex-row items-center md:justify-around  h-full mb-10 group">
            {services.map((item) => (
                <div key={item.id} className="flex flex-col gap-2 w-[80%]  hover:translate-y-1  transaction duration-200 ease-in-out  border border-fuchsia-pink-300 px-4 py-3 rounded-lg ">
                    <div  className=" flex justify-center w-16  p-1 bg-mine-shaft-800 rounded-full ">
                        {item.icon}
                    </div>
                    <div className="text-2xl text-mine-shaft-100">{item.title}</div>
                    <div className="text-justify text-xs">{item.desc}</div>
                    <Button variant="subtle" size='sm' className="w-10" rightSection={<IconArrowRight stroke={2}  />}>Join Now</Button>
                </div>
            ))}
        </div>
    </div>
)
}
export default Services