
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin} from "@tabler/icons-react";



const Footer=()=>{

    const footerLinks = [
        {
            title: "Product",
            links: ["Gym", "Yoga", ]
        },
        {
            title: "Company",
            links: ["About Us", "Pricing", "Privacy Policy", "Terms & Conditions"]
        },
        {
            title: "Support",
            links: ["Help & Support", "Feedback", "FAQs"]
        }
    ];

    return(
        <div className="bg-mine-shaft-950   pb-52 pt-4 font-['poppins'] ">
            <div className='mt-20 flex gap-10 justify-around w-full  '>
                <div className=" w-1/4 flex flex-col gap-4 ml-20">
                    <div>
                        <img src="klumfit_asset.png" alt="logo" className="h-10 w-44 "/>
                    </div>
                    <p className="text-mine-shaft-200">
                        The gym is not just
                        a place to work out; its a space to push your limits, build strength, and transform your body and mind.
                    </p>
                    <div
                        className='flex gap-2 text-fuchsia-pink-600 [&>div]:bg-mine-shaft-600 [&>div]:rounded-full [&>div]:p-2 '>
                        <div><IconBrandFacebook stroke={2}/></div>
                        <div><IconBrandLinkedin stroke={2}/></div>
                        <div><IconBrandInstagram stroke={2}/></div>
                    </div>
                </div>

                {
                    footerLinks.map((linkGroup) => (
                        <div key={linkGroup.title} className="w-1/4">
                            <h3 className="text-xl text-bright-sun-400 ">{linkGroup.title}</h3>
                            <ul className="list-none">
                                {linkGroup.links.map((link) => (
                                    <li key={link}
                                        className="text-mine-shaft-200 py-1 cursor-pointer hover:text-fuchsia-pink-400 hover:translate-x-2 transition duration-300 ease-in-out">
                                        {link}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}
export default Footer