import React from 'react';

const Crads = () => {
  const cardsData = [
    {
      title: "15",
      subtitle: "Total Restaurants",
      linkText: "View Restaurant",
      bgColor: "bg-[#004580]",
    },
    {
      title: "15",
      subtitle: "Branches",
      linkText: "View Branches",
      bgColor: "bg-[#FFB22A]",
    },
    {
      title: "192910",
      subtitle: "Customers",
      linkText: "View Customers",
      bgColor: "bg-[#27C6DB]",
    },
    {
      title: "3",
      subtitle: "Popular Dishes",
      linkText: "View Dishes",
      bgColor: "bg-[#FD4B6D]",
    },
    {
        title: "4",
        subtitle: "Sales Active Users",
        linkText: "View Orders",
        bgColor: "bg-[#FD4B6D]",
      },
  ];

  return (
    <div className="grid gap-4 py-4 px-6 sm:grid-cols-2 md:grid-cols-3 font-poppins">
      {cardsData.map((card, index) => (
        <div
          key={index}
          className={`w-68 p-4 text-white rounded ${card.bgColor}`}
        >
          <h2 className="text-4xl font-bold">{card.title}</h2>
          <p className="mt-2 text-sm">{card.subtitle}</p>
          <a
            href="#"
            className="mt-4 inline-block px-4 py-2 text-sm font-medium border border-white rounded hover:bg-white hover:text-black transition"
          >
            {card.linkText}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Crads;
