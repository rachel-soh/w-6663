import { motion } from "framer-motion";

const MediaCoverage = () => {
  const mediaOutlets = [
    {
      name: "The Straits Times",
      url: "https://www.straitstimes.com/life/entertainment/actress-fann-wongs-son-zed-was-a-semi-finalist-in-national-youth-orator-championships-2025",
      logo: "/images/media-st.png",
      className: "w-36 md:w-48 lg:w-52",
    },
    {
      name: "CNA",
      url: "https://cnalifestyle.channelnewsasia.com/entertainment/fann-wong-christopher-lee-son-zed-national-youth-orator-championships-577491",
      logo: "/images/media-cna.png",
      className: "w-7 md:w-10 lg:w-12",
    },
    {
      name: "Mothership",
      url: "https://mothership.sg/2026/01/fann-wong-christopher-lee-son-national-youth-orator-championships/",
      logo: "/images/media-mothership.png",
      className: "w-36 md:w-48 lg:w-52",
    },
    {
      name: "AsiaOne",
      url: "https://www.asiaone.com/entertainment/fann-wong-christopher-lee-son-zed-semi-finals-national-youth-orator",
      logo: "/images/media-asiaone.png",
      className: "w-28 md:w-40 lg:w-44",
    },
    {
      name: "8days",
      url: "https://www.8days.sg/entertainment/local/fann-wong-son-zed-public-speaking-contest-853216",
      logo: "/images/media-8days.png",
      className: "w-20 md:w-28 lg:w-32",
    },
  ];

  return (
    <section id="media-coverage" className="bg-gray-50 border-b border-gray-200 py-4 md:py-5 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider text-center mb-3 lg:hidden">As featured in</p>
        <div className="flex items-center justify-center gap-6 md:gap-8 flex-wrap lg:flex-nowrap">
          <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider whitespace-nowrap flex-shrink-0 hidden lg:block">As featured in</span>
          {mediaOutlets.map((outlet, index) => (
            <a
              key={index}
              href={outlet.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center hover:opacity-70 transition-opacity flex-shrink-0"
            >
              <img
                src={outlet.logo}
                alt={outlet.name}
                className={`${outlet.className} h-auto object-contain`}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaCoverage;
