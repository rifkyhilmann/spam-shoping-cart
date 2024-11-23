import { Icons } from "@/assets"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="w-full h-16 border-b flex items-center justify-center bg-white ">
            <div className="content h-full flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 ">
                    <img src={Icons.Logo} className="h-8 w-8" alt="" />
                    <p className="font-inter font-bold ">SUN.CO.</p>
                </Link>
                <div className="flex items-center justify-end">
                    <Link to="/cart" className="h-10 px-4 gap-3 flex items-center justify-center border rounded-lg border-black cursor-pointer hover:bg-[#EAEEEF]">
                        <img src={Icons.Cart} className="h-4 w-4" alt="" />
                        <p className="text-sm font-inter font-medium">View Cart</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar