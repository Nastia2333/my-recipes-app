import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";

import { RecipeCard } from "../index";
import recipes from "../../data/recipes";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../RecipeCarousel/RecipeCarousel.scss";


export function RecipeCarousel() {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperEl = document.querySelector(".swiper");

    const handleMouseEnter = () => swiperRef.current?.autoplay.stop();
    const handleMouseLeave = () => swiperRef.current?.autoplay.start();

    swiperEl.addEventListener("mouseenter", handleMouseEnter);
    swiperEl.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      swiperEl.removeEventListener("mouseenter", handleMouseEnter);
      swiperEl.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="carousel-wrapper">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[EffectCoverflow, Autoplay, Pagination]}
        effect="coverflow"
        centeredSlides
        loop
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: -50,
          depth: 150,
          modifier: 1,
          slideShadows: false,
        }}

        breakpoints={{
          480: {
            slidesPerView: 1,
            spaceBetween: 24,
          },
          768: {
            slidesPerView: 2.2,
            spaceBetween: 50,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 80,
          },
        }}
      >
        {recipes.map((recipe) => (
          <SwiperSlide key={recipe.id}>
            <RecipeCard recipe={recipe} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
