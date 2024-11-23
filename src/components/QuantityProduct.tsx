import { useState } from "react";

const QuantityProduct = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };

    const handleDecrement = () => {
        setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0)); // Agar tidak negatif
    };


    return (
        <div className="flex items-center justify-between gap-2 w-32 px-3 border h-10 rounded-xl">
            <button 
                className="text-3xl" 
                onClick={handleDecrement}>
                -
            </button>
            <input 
                type="text"
                value={count}
                className="flex-shrink flex max-w-12 text-center bg-transparent" 
                min="0" // Menghindari angka negatif
                disabled
            />
            <button 
                className="text-2xl" 
                onClick={handleIncrement}>
                +
            </button>
        </div>
    );
};

export default QuantityProduct;
