import {Burger, Button, Divider, Drawer} from "@mantine/core";
import Navbar from "./Navbar.jsx";
import {useDisclosure} from "@mantine/hooks";
import {IconX} from "@tabler/icons-react";


const Header=()=>{
    const [opened, { open, close }] = useDisclosure(false);
    const links=[
        {name:'Home',path:'/'},
        {name:'Pricing',path:'/#'},



    ]

    return(
        <>

            <div className=" sticky top-0  z-10  bg-mine-shaft-900 h-16 text-white flex justify-between px-10 items-center ">
                <div className="flex   items-center gap-36">
                    <div>
                        <img src="klumfit_asset.png" alt="logo" className="h-10 w-44 "/>
                    </div>
                    <Navbar/>
                </div>


                <div className=" bs-mx:hidden flex gap-4  items-center mr-20">
                   <Button variant="filled" size='xs' className="font-medium">Login</Button>
                    <Button variant="outline" size='xs' className="font-medium">Gym Login</Button>

                </div>
                <Burger  className="bs:hidden " opened={opened} onClick={open} aria-label="Toggle navigation" />


            </div>

            <Divider color="mineShaft.5"/>

            <Drawer position="left" size="xs" closeButtonProps={{icon: <IconX size={30} stroke={1.5}/>}}
                    opened={opened} onClose={close} title="">
                <div className="flex flex-col  h-full  justify-center gap-6">
                    {
                        links.map(link => (
                            <div key={link.name}
                                 className={`  flex items-center    `}>
                                <a href={link.path} className="hover:text-fuchsia-pink-400 text-lg">
                                    {link.name}
                                </a>
                            </div>
                        ))
                    }
                    <div className="flex gap-4  flex-col justify-center ">
                        <Button variant="filled" size='xs' className="font-medium">Login</Button>
                        <Button variant="outline" size='xs' className="font-medium">Gym Login</Button>

                    </div>
                </div>
            </Drawer>

        </>
    )

}
export default Header