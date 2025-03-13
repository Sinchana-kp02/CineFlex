"use client";
import { Button } from "@/components/ui/button";
import { Star, Calendar } from "lucide-react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const featuredMovies = [
  {
    id: "dune-part-two",
    title: "Dune: Part Two",
    image: "/movies/dune-part-two/landscape.jpg",
    rating: 8.7,
    releaseDate: "March 1, 2024",
    alignment: "center",
    description:
      "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
  },
  {
    id: "the-batman",
    title: "The Batman",
    image: "/movies/the-batman/landscape.jpg",
    rating: 8.3,
    releaseDate: "March 4, 2022",
    alignment: "top center",
    description:
      "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption.",
  },
  {
    id: "oppenheimer",
    title: "Oppenheimer",
    image: "/movies/oppenheimer/landscape.jpg",
    rating: 8.5,
    releaseDate: "July 21, 2023",
    alignment: "center",
    description:
      "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
  },
  {
    id: "godzilla-kong",
    title: "Godzilla x Kong: The New Empire",
    image: "/movies/godzilla-kong/landscape.jpg",
    rating: 7.8,
    releaseDate: "March 29, 2024",
    alignment: "top center",
    description:
      "Two ancient titans, Godzilla and Kong, clash in an epic battle as humans unravel their intertwined origins.",
  },
];

export default function FeaturedMovies() {
  return (
    <div className="featured-slider">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="rounded-xl swiper-custom"
      >
        {featuredMovies.map((movie, index) => (
          <SwiperSlide key={movie.id}>
            <div className="relative h-[400px] md:h-[500px] w-full">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${movie.image})`,
                  backgroundPosition: movie.alignment,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center bg-[#FC174D]/90 px-2 py-1 rounded text-white text-sm">
                    <Star className="h-4 w-4 mr-1 fill-white" />
                    <span>{movie.rating}/10</span>
                  </div>
                  <div className="flex items-center bg-black/60 px-2 py-1 rounded text-white text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{movie.releaseDate}</span>
                  </div>
                </div>

                <h3 className="text-2xl md:text-4xl font-bold text-white mb-2">
                  {movie.title}
                </h3>
                <p className="text-white/80 mb-4 max-w-2xl">
                  {movie.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  <Button className="bg-[#FC174D] hover:bg-[#d91341] text-white">
                    <Link href={`/movies/${movie.id}`}>Book Now</Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="text-white border-white hover:bg-white/10"
                  >
                    Watch Trailer
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
