import { FaRegClock } from "react-icons/fa";
import { HiOutlineTicket } from "react-icons/hi";

const Card = () => {
    return (
        <div className="max-w-full sm:max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
            <img 
                src="https://iili.io/2uHqhoQ.png" 
                alt="Rome Bus Tour" 
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                    <p className="text-xs sm:text-sm text-gray-500">Hop-On Hop-Off Tour</p>
                    <span className="flex items-center text-gray-500">
                        <FaRegClock className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="ml-1 text-xs sm:text-sm">24 hours</span>
                    </span>
                </div>
                <h2 className="text-sm sm:text-lg font-semibold text-gray-800 leading-snug">
                    Rome Bus Ticket: Discover Package
                </h2>
                
                <span className="text-gray-500 flex items-center gap-2 mt-2 text-xs sm:text-sm">
                    <HiOutlineTicket className="w-4 h-4 sm:w-5 sm:h-5" /> #2
                </span>
                
                <div className="flex items-center justify-between mt-3">
                    <p className="text-sm sm:text-lg font-semibold">
                        Start From €28 <span className="text-xs sm:text-sm font-normal">(Per person)</span>
                    </p>
                </div>
                
                <div className="flex justify-between gap-2 mt-4">
                    <button className="w-1/2 bg-[#930B31] text-white py-1 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold hover:bg-red-700">
                        Buy Now
                    </button>
                    <button className="w-1/2 bg-gray-200 text-gray-800 py-1 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold hover:bg-gray-300">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
