import {Button, Divider} from "@mantine/core";
import Navbar from "./Navbar.jsx";

const Header=()=>{
    return(
        <>

            <div className=" sticky top-0  z-10  bg-mine-shaft-900 h-16 text-white flex justify-between px-10 items-center ">
                <div className="flex   items-center gap-36">
                    <div>
                        <img src="klumfit_asset.png" alt="logo" className="h-10 w-44 "/>
                    </div>
                    <Navbar/>
                </div>


                <div className="flex gap-4  items-center mr-20">
                   <Button variant="filled" size='xs' className="font-medium">Login</Button>
                    <Button variant="outline" size='xs' className="font-medium">Gym Login</Button>

                </div>
            </div>

            <Divider color="mineShaft.5"/>

        </>
    )

}
export default Header