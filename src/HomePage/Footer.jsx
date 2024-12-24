import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin } from "@tabler/icons-react";

const Footer = () => {
    const footerLinks = [
        {
            title: "Product",
            links: ["Gym", "Yoga"],
        },
        {
            title: "Company",
            links: ["About Us", "Pricing", "Privacy Policy", "Terms & Conditions"],
        },
        {
            title: "Support",
            links: ["Help & Support", "Feedback", "FAQs"],
        },
    ];

    return (
        <div className="pt-6 bg-mine-shaft-950 font-['poppins'] text-mine-shaft-200">

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 place-items-center px-4 sm:px-10 md:px-20 py-10">

                <div className="flex flex-col gap-4 items-center sm:items-start">
                    <img src="klumfit_asset.png" alt="logo" className="h-10 w-44" />
                    <p className="text-center sm:text-left">
                        The gym is not just a place to work out; it's a space to push your
                        limits, build strength, and transform your body and mind.
                    </p>
                    <div className="flex gap-4 justify-center sm:justify-start">
                        <div className="bg-mine-shaft-900 p-2 rounded-full cursor-pointer hover:bg-mine-shaft-700">
                            <IconBrandFacebook stroke={2} />
                        </div>
                        <div className="bg-mine-shaft-900 p-2 rounded-full cursor-pointer hover:bg-mine-shaft-700">
                            <IconBrandLinkedin stroke={2} />
                        </div>
                        <div className="bg-mine-shaft-900 p-2 rounded-full cursor-pointer hover:bg-mine-shaft-700">
                            <IconBrandInstagram stroke={2} />
                        </div>
                    </div>
                </div>

                {/* Links */}
                {footerLinks.map((linkGroup) => (
                    <div key={linkGroup.title} className="text-center sm:text-left">
                        <h3 className="text-xl text-bright-sun-400">{linkGroup.title}</h3>
                        <ul>
                            {linkGroup.links.map((link) => (
                                <li
                                    key={link}
                                    className="py-1 cursor-pointer hover:text-fuchsia-pink-400 hover:translate-x-2 transition duration-300 ease-in-out"
                                >
                                    {link}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>


            <div className="flex flex-col sm:flex-row items-center justify-center  text-center text-lg py-7 border-t border-t-mine-shaft-300 font-semibold">
                <p>
                    &copy; 2023 &nbsp; <span className="text-fuchsia-pink-400">Klumfit.</span> &nbsp; All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;
