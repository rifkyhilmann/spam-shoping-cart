import { Icons } from "@/assets"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div  className="w-full h-max min-h-14 bg-black  flex items-center justify-center font-inter"> 
            <div className="content flex flex-col gap-5 my-2">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2 text-white">
                        <img src={Icons.Logo} className="h-8 w-8" alt="" />
                        <p className="font-inter font-bold ">SUN.CO.</p>
                    </div>
                    <div className="hidden md:flex items-center justify-center text-[#D9DBE1] text-sm">
                        <p>© 2023 dot.cards text task. All rights reserved</p>
                    </div>
                    <div className="flex items-center justify-end gap-3">
                        <div className="h-7 w-7 bg-[#363137] text-white rounded-full flex items-center justify-center hover:opacity-80 cursor-pointer">
                            <FontAwesomeIcon icon={faInstagram} className="text-sm" />
                        </div>
                        <div className="h-7 w-7 bg-[#363137] text-white rounded-full flex items-center justify-center hover:opacity-80 cursor-pointer">
                            <FontAwesomeIcon icon={faTwitter} className="text-sm" />
                        </div>
                        <div className="h-7 w-7 bg-[#363137] text-white rounded-full flex items-center justify-center hover:opacity-80 cursor-pointer">
                            <FontAwesomeIcon icon={faYoutube} className="text-sm" />
                        </div>
                    </div>
                </div>
                
                <div className="md:hidden flex items-start text-[#D9DBE1] text-sm">
                    <p>© 2023 dot.cards text task. All rights reserved</p>
                </div>
                
            </div>
        </div>
    )
}

export default Footer