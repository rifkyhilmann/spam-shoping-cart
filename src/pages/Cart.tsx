import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import QuantityProduct from '@/components/QuantityProduct';
import { ShoesSample } from '@/assets';

const Cart = () => {
    return (
        <div className="flex  gap-2 flex-1 w-full my-10 justify-center font-inter">
            <div className="content flex flex-col gap-5">
                <p className="text-2xl font-medium">Your Bag</p>
                <div className=" w-full flex md:flex-row flex-col  gap-10">
                    <div className='flex flex-col w-full md:flex-1 h-max'>
                        <div className='h-40 w-full  border-b py-4 flex gap-4'>
                            <div className='h-full w-32 bg-[#F4F4F4] flex items-center justify-center rounded-xl px-3'>
                                <img src={ShoesSample} className='w-full' alt="" />
                            </div>
                            <div className='flex-1 flex h-full flex-col justify-between  gap-2'>
                                <div className='flex flex-col gap-3'>
                                    <div className='flex items-center justify-between'>
                                        <p className='font-semibold'>Nike</p>
                                        <p>$96.43</p>
                                    </div>
                                    <p className='text-[#67696E]'>Nike Air Force Premium</p>
                                </div>
                                <div className='flex items-center gap-6'>
                                    <QuantityProduct />
                                    <p className='font-medium text-[#67696E] cursor-pointer'>Remove</p>
                                </div>
                            </div>
                        </div>
                        <div className='h-40 w-full  border-b py-4 flex gap-4'>
                            <div className='h-full w-32 bg-[#F4F4F4] flex items-center justify-center rounded-xl px-3'>
                                <img src={ShoesSample} className='w-full' alt="" />
                            </div>
                            <div className='flex-1 flex h-full flex-col justify-between  gap-2'>
                                <div className='flex flex-col gap-3'>
                                    <div className='flex items-center justify-between'>
                                        <p className='font-semibold'>Nike</p>
                                        <p>$96.43</p>
                                    </div>
                                    <p className='text-[#67696E]'>Nike Air Force Premium</p>
                                </div>
                                <div className='flex items-center gap-6'>
                                    <QuantityProduct />
                                    <p className='font-medium text-[#67696E] cursor-pointer'>Remove</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" w-full md:w-[360px] h-max bg-white rounded-xl shadow-md p-7 flex flex-col gap-7">
                        <p className="text-2xl font-semibold">Summary</p>
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center justify-between">
                                <p className="font-medium ">Subtotal</p>
                                <p >$90.00</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="font-medium ">Shipping and delivery</p>
                                <p>$20.00</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="font-medium ">Tax</p>
                                <p>$6.00</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="font-medium ">Discount</p>
                                <p className="text-[#EC5E2A]">-$6.00</p>
                            </div>
                        </div>
                        <hr />
                        <div className="flex items-center justify-between">
                            <p className="font-bold text-lg ">Total</p>
                            <p>$164.46</p>
                        </div>
                        <button className="h-12 w-full mt-5  bg-black rounded-lg text-white hover:opacity-80 flex items-center justify-center gap-2">
                            Checkout <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart