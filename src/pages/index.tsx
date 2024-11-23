import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { ShoesSample } from '@/assets';
import ProductCarousel from '@/components/ProductCarousel';


const Pages = () => {
    return (
        <div className="flex flex-1 w-full my-10 justify-center font-inter">
          <div className="content flex flex-col items-center">
            <div className="w-full rounded-xl h-max md:h-[320px] bg-[#EAEEEF] flex md:flex-row flex-col-reverse items-center justify-start md:justify-between gap-5 md:gap-10 py-10 px-10">
              <div className="w-full h-full flex flex-col md:items-start items-center  gap-2 md:gap-4">
                <h3 className="text-3xl md:text-4xl font-semibold text-[#EC5E2A]">25% OFF</h3>
                <h1 className="text-4xl md:text-5xl font-bold">Summer Sale</h1>
                <p className="font-light text-[#67696E]">Discover our summer styles with discount</p>
                <button className="h-12 w-full md:w-60 mt-5 md:mt-10 bg-black rounded-lg text-white hover:opacity-80 flex items-center justify-center gap-2">
                  Shop Now <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
              <div className="w-full  h-max md:h-full ">
                <img src={ShoesSample} className='h-max max-h-full' alt="" />
              </div>
            </div>

            <ProductCarousel />

          </div>
        </div>
    )
}

export default Pages