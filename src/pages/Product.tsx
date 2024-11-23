import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import QuantityProduct from '@/components/QuantityProduct';
import { ShoesSample } from '@/assets';

const Product = () => {
    return (
        <div className="flex  gap-2 flex-1 w-full my-10 justify-center font-inter">
            <div className="content flex flex-col gap-16">
                <div className="w-full h-max flex md:flex-row flex-col items-center gap-10 justify-between ">
                    <div className="w-full h-[300px] bg-[#EAEEEF] rounded-xl p-8 flex items-center justify-center">
                        <img src={ShoesSample} className='w-full' alt="" />
                    </div>
                    <div className="w-full h-[300px] bg-white shadow-xl rounded-lg p-5 flex flex-col justify-between gap-2">
                        <div className="flex flex-col gap-1">
                            <p className="font-bold text-lg">Adidas</p>
                            <p className="font-light">DAILY 3.0 SHOES</p>
                            <p className="font-semibold">$98.99</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className="font-medium text-md">Quantity</p>
                            <QuantityProduct />
                        </div>  
                        <button className="h-12 w-full mt-5  bg-black rounded-lg text-white hover:opacity-80 flex items-center justify-center gap-2">
                            Checkout <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>
                </div>
                <div className="w-full h-max flex md:flex-row flex-col items-center gap-10 justify-between ">
                    <div className="w-full h-[300px] flex flex-col  gap-4">
                       <p className='font-medium text-lg'>Description</p>
                       <hr />
                       <p className='text-[#67696E]'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. At reprehenderit laudantium quis illum fuga. Itaque dicta magni rem dolores accusantium, numquam quo hic a harum modi, tempore reiciendis eum fugiat.
                       </p>
                       <ul className='list-disc mx-5 text-[#67696E]'>
                            <li>Regular Fit</li>
                            <li>Lace closure</li>
                            <li>Ruber outsole</li>
                            <li>Imported</li>
                       </ul>
                    </div>
                    <div className="w-full h-[300px] bg-[#EAEEEF] rounded-xl p-8 flex items-center justify-center">
                        <img src={ShoesSample} className='w-full' alt="" />
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default Product