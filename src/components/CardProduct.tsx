import { ShoesSample } from "@/assets"


const CardProduct = () => {
    return (
        <div className='flex flex-col gap-1 '>
            <div className='flex flex-1 min-h-[150px] bg-[#F4F4F4] rounded-xl mb-2 items-center justify-center px-4'>
                <img src={ShoesSample} alt="" className="w-full" />
            </div>
            <p className='font-semibold text-lg'>Off-White</p>
            <p className='font-light text-sm'>Oot Of Office Sneakers</p>
            <p className='font-bold text-sm'>$775</p>
        </div>
    )
}

export default CardProduct