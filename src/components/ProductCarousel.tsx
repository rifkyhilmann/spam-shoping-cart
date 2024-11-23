import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import CardProduct from './CardProduct';

function ProductCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 300; // Adjust based on item size
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="w-full  flex flex-col gap-5 mt-10">
      <p className="text-2xl font-semibold">Explore our latest drops</p>
     
      <div className='md:hidden flex flex-col gap-5'>
        <div
          ref={carouselRef}
          className="h-max w-full overflow-x-hidden flex gap-6 scroll-smooth"
        >
          <div className="flex-shrink-0 w-[150px] "><CardProduct /></div>
          <div className="flex-shrink-0 w-[150px]"><CardProduct /></div>
          <div className="flex-shrink-0 w-[150px]"><CardProduct /></div>
          <div className="flex-shrink-0 w-[150px]"><CardProduct /></div>
        </div>

        <div className="flex items-center gap-5">
          <div
            className="flex items-center justify-center shadow-lg bg-white rounded-full h-8 w-8 cursor-pointer"
            onClick={() => handleScroll('left')}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
          <div
            className="flex items-center justify-center shadow-lg bg-white rounded-full h-8 w-8 cursor-pointer"
            onClick={() => handleScroll('right')}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>

      </div>

        <div className='h-[350px] w-full hidden  md:grid grid-cols-4 gap-6'>
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </div>
    </div>
  );
}

export default ProductCarousel;
