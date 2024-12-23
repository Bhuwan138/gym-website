


const NavbarPage=()=>{

    const links=[
        {name:'Home',path:'/'},
        {name:'Pricing',path:'/#'},



    ]



    return(
        <div className=" bs-mx:hidden flex  gap-5 h-full items-center">
            {
                links.map(link=>(
                    <div key={link.name} className={`${link.name==='Home' && " text-fuchsia-pink-400" } flex items-center  h-full `}>
                        <a  href='/' className="text-lg font-medium">
                            {link.name}
                        </a>
                    </div>
                ))
            }
        </div>
    )
}
export default NavbarPage