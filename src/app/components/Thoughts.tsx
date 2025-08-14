import React from "react";

interface Item {
  day: string;
  month: string;
  year: string;
  title: string;
  image: string;
  alt: string;
}

const items: Item[] = [
  {
    day: "28",
    month: "AUG",
    year: "2018",
    title: "Laing O'Rourke: Moves, projects and bids",
    image: "/smoke.jpg",
    alt: "Industrial factory emitting smoke at sunset",
  },
  {
    day: "27",
    month: "AUG",
    year: "2018",
    title: "How to turn Victorian gasholders apartments",
    image: "/fan.jpg",
    alt: "Wind turbines at dusk representing renewable energy",
  },
  {
    day: "26",
    month: "AUG",
    year: "2018",
    title: "CITB appoints Peter Lauener as new chairman",
    image: "/machine.jpg",
    alt: "Robotics arm assembling electronics in a modern facility",
  },
];

const Thoughts: React.FC = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      {/* Header */}
      <div className="max-w-6xl mx-auto w-full">
        <h1 className="text-3xl sm:text-4xl font-normal mb-4 leading-snug">
          Thoughts & <br />Experiments
        </h1>
        <div className="w-14 sm:w-16 h-1 bg-[#d24e1a] mb-8"></div>

        {/* Card grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col w-full">
              {/* Image + Date */}
              <div className="relative h-40 sm:h-48 md:h-56 lg:h-64 rounded-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div
                  className="absolute top-0 left-0 bg-[#d24e1a] text-white w-14 sm:w-16 md:w-20"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 82%, 0 100%)",
                    padding: "10px 8px 16px 8px",
                  }}
                >
                  <div className="text-lg sm:text-xl md:text-3xl font-medium">
                    {item.day}
                  </div>
                  <div className="w-6 sm:w-8 md:w-10 h-0.5 bg-[#ffc600] my-1"></div>
                  <div className="text-[9px] sm:text-[10px] md:text-xs font-medium">
                    {item.month}
                  </div>
                  <div className="text-[9px] sm:text-[10px] md:text-xs font-medium">
                    {item.year}
                  </div>
                </div>
              </div>

              {/* Text */}
              <p className="mt-3 text-[11px] sm:text-xs md:text-sm text-gray-500">
                By Frenify — In Australia
              </p>
              <h2 className="text-base sm:text-lg md:text-2xl font-medium mb-3 sm:mb-4 hover:text-[#46a2df] cursor-pointer duration-300">
                {item.title}
              </h2>
           <button className="bg-[#081225] text-white px-6 py-2 rounded-md hover:bg-[#ad3110] transition duration-300 cursor-pointer text-base w-[130px]">
  Read More
</button>


            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Thoughts;
