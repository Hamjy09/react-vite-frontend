import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import { WineOff, ClockArrowUp, Wallet } from "lucide-react";

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Fade(),
    Autoplay({ delay: 3000, stoponInterection: true }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Update dot indicator
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  // Example slides
  const slides = [
    {
      bg: "src/assets/fading-blue-background.jpg",
      labelText: "New",
      title: "Slide One",
      subtitle: "Some description for slide one",
      btnText: "Buy Now",
      overlayImg: "src/assets/slide1.webp",
      lnglastingText: "Long Lasting",
      alcoholText: "Alcohol Free",
      affordText: "Affordable Price",
      alcoholicon: "",
    },
    {
      bg: "src/assets/fading-blue-background.jpg",
      title: "Slide Two",
      subtitle: "Another description",
      overlayImg: "src/assets/slide1.webp",
    },
    {
      bg: "src/assets/fading-blue-background.jpg",
      title: "Slide Three",
      subtitle: "Third slide text",
      overlayImg: "src/assets/slide1.webp",
      btnText: "See More",
    },
    {
      bg: "src/assets/fading-blue-background.jpg",
      title: "Slide Three",
      subtitle: "Third slide text",
      overlayImg: "src/assets/slide1.webp",
    },
    {
      bg: "src/assets/fading-blue-background.jpg",
      title: "Slide Three",
      subtitle: "Third slide text",
      overlayImg: "src/assets/slide1.webp",
    },
  ];

  return (
    <div className="relative px-10 pt-8 overflow-hidden" ref={emblaRef}>
      {/* Slides wrapper */}
      <div className="flex">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative min-w-full min-h-[380px] md:min-h-[500px] flex items-center justify-center rounded-2xl"
            style={{
              backgroundImage: `url(${slide.bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Dark overlay */}
            {/* <div className="absolute inset-0 bg-black/40"></div> */}

            {/* Content overlay */}
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-8 px-4">
              <img
                src={slide.overlayImg}
                alt=""
                className="order-1 md:order-2 w-xl md:w-[500px] h-auto mx-auto mb-8 md:mb-0 animate-float"
              />

              {/* Text block */}
              <div className="order-2 md:order-1 flex flex-col gap-4 justify-center text-center md:text-left text-white md:ml-6">
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold">
                  {slide.title}
                </h2>
                <p className="mt-1 text-base sm:text-lg md:text-2xl">
                  {slide.subtitle}
                </p>

                {slide.btnText && (
                  <button className="self-center md:self-start inline-block w-[10rem] rounded-lg bg-[#2a27e9] px-8 md:px-10 py-2.5 md:py-3 text-sm md:text-md font-medium text-white transition-colors duration-300 ease-in-out hover:bg-[#120FBF] focus:outline-hidden">
                    {slide.btnText}
                  </button>
                )}
              </div>

              {/* ICONS-----*/}
              <div className="hidden md:flex order-3 flex-col gap-6 justify-center text-center text-white mr-6">
                <div className="flex flex-col items-center">
                  <ClockArrowUp className="size-10 p-2 rounded-lg bg-white/20 border border-white/20" />
                  <p className="text-xl">{slide.lnglastingText}</p>
                </div>

                <div className="flex flex-col items-center">
                  <WineOff className="size-10 p-2 rounded-lg bg-white/20 border border-white/20" />
                  <p className="mt-2 text-xl">{slide.alcoholText}</p>
                </div>

                <div className="flex flex-col items-center">
                  <Wallet className="size-10 p-2 rounded-lg bg-white/20 border border-white/20" />
                  <p className="mt-2 text-xl">{slide.affordText}</p>
                </div>
              </div>
            </div>

            {/* Dot pagination inside bottom of each slide */}
            <div className="hidden md:flex  absolute bottom-4 left-1/2 -translate-x-1/2  gap-2 z-20">
              {slides.map((_, dotIndex) => (
                <button
                  key={dotIndex}
                  onClick={() => emblaApi?.scrollTo(dotIndex)}
                  className={`w-3 h-3 rounded-full ${
                    selectedIndex === dotIndex ? "bg-white" : "bg-gray-400/70"
                  }`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
