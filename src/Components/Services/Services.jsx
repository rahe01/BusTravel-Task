import Card from './Card';
import busData from '../../../public/bus.json';

const Services = () => {
    return (
        <div className="p-4 mt-10 md:mt-16">
            {/* Header Section */}
            <h1 className="text-xl md:text-4xl font-bold text-gray-800 mb-2 text-center sm:text-left">
                Choose Your Bus Service
            </h1>
            <p className="text-gray-600 mb-6 text-center sm:text-left">
                Reserve your seat from available bus rides. From comfort to budget, explore ticket options.
            </p>
            
            {/* Tab Section */}
            <div className="flex flex-wrap justify-between gap-4 mb-6 ">
                {["Big Bus Packages", "Green Line Packages", "Rome Tour Packages", "Historical Packages", "City Sightseeing"].map((tab, index) => (
                    <button 
                        key={index} 
                        className="font-semibold pb-2 border-b-2 border-transparent hover:border-red-600 hover:text-red-500 focus:border-red-600 transition-colors duration-200">
                        {tab}
                    </button>
                ))}
            </div>
            
            {/* Card Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1">
                {busData.map((bus, index) => (
                    <Card
                        key={index}
                        title={bus.title}
                        subtitle={bus.subtitle}
                        image={bus.image}
                        duration={bus.duration}
                        ticketCount={bus.ticket_count}
                        price={bus.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default Services;
