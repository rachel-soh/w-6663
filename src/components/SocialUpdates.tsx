
import { motion } from "framer-motion";
import { Instagram, Facebook, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const SocialUpdates = () => {
  const isMobile = useIsMobile();
  const postsPerPage = isMobile ? 1 : 3;
  const [currentPage, setCurrentPage] = useState(0);

  const reels = [
    "https://www.instagram.com/reel/DSj8ZkEDfnh/",
    "https://www.instagram.com/reel/DT66hWMEmyr/",
    "https://www.instagram.com/reel/DRMN-UCjHou/",
    "https://www.instagram.com/reel/DRJdYA3kkLE/",
    "https://www.instagram.com/reel/DQ_lAKfkvBt/",
    "https://www.instagram.com/reel/DRCK47ZknA4/",
    "https://www.instagram.com/reel/DRO0N-4iu0I/",
    "https://www.instagram.com/reel/DRt3wS-jyl0/",
    "https://www.instagram.com/reel/DR1mF0DDPg3/",
    "https://www.instagram.com/reel/DR_6nu5kqs1/",
    "https://www.instagram.com/reel/DSFDWzykrp2/",
    "https://www.instagram.com/reel/DSKNmwUEjfI/",
    "https://www.instagram.com/reel/DSR6kPVEi0p/",
    "https://www.instagram.com/reel/DSYy8KflNlk/",
    "https://www.instagram.com/reel/DSguVQHElcF/",
    "https://www.instagram.com/reel/DSpTCrhkrUl/",
    "https://www.instagram.com/reel/DSzqNyOEn4N/",
    "https://www.instagram.com/reel/DTaBjcegKAZ/",
    "https://www.instagram.com/reel/DTfYOXdktrc/",
    "https://www.instagram.com/reel/DTsCjFsEtXc/",
    "https://www.instagram.com/reel/DTzxFRxjaYX/",
    "https://www.instagram.com/reel/DUAo_NyCujD/",
  ];

  const totalPages = Math.ceil(reels.length / postsPerPage);
  const currentReels = reels.slice(
    currentPage * postsPerPage,
    (currentPage + 1) * postsPerPage
  );

  useEffect(() => {
    setCurrentPage(0);
  }, [isMobile]);

  const processEmbeds = useCallback(() => {
    if ((window as any).instgrm) {
      (window as any).instgrm.Embeds.process();
    }
  }, []);

  useEffect(() => {
    if (!(window as any).instgrm) {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      script.onload = processEmbeds;
      document.body.appendChild(script);
    } else {
      // Small delay to let DOM update before processing
      setTimeout(processEmbeds, 100);
    }
  }, [currentPage, processEmbeds]);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section id="social-updates" className="bg-white py-16 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
            NYOC 2025 Highlights
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
            Catch the best moments from our 2025 competition.
          </p>
        </motion.div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevPage}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 z-10 bg-white hover:bg-gray-50 text-red-600 rounded-full p-2 md:p-3 shadow-lg transition-all"
            aria-label="Previous posts"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <button
            onClick={nextPage}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 z-10 bg-white hover:bg-gray-50 text-red-600 rounded-full p-2 md:p-3 shadow-lg transition-all"
            aria-label="Next posts"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <motion.div
            key={currentPage}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 max-w-sm md:max-w-none mx-auto px-8 md:px-12"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
          >
            {currentReels.map((url, index) => (
              <div key={`${currentPage}-${index}`} className="flex justify-center">
                <blockquote
                  className="instagram-media"
                  data-instgrm-captioned
                  data-instgrm-permalink={url}
                  data-instgrm-version="14"
                  style={{
                    background: "#FFF",
                    border: 0,
                    borderRadius: "12px",
                    boxShadow: "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
                    margin: "0",
                    maxWidth: "540px",
                    minWidth: "280px",
                    width: "100%",
                  }}
                >
                </blockquote>
              </div>
            ))}
          </motion.div>

          {/* Page Indicators */}
          <div className="flex justify-center gap-2 mb-6">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentPage
                    ? "w-8 bg-red-600"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://www.instagram.com/masterspeakersacademy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 py-3 rounded-lg transition-all shadow-lg hover:shadow-xl"
            >
              <Instagram className="w-5 h-5" />
              Follow on Instagram
            </a>
            <a
              href="https://www.facebook.com/masterspeakersacademy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-all shadow-lg hover:shadow-xl"
            >
              <Facebook className="w-5 h-5" />
              Follow on Facebook
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialUpdates;
