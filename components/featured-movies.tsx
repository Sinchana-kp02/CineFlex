"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Calendar } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const slideRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredMovies.length);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + featuredMovies.length) % featuredMovies.length
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);

  return (
    <div className="relative overflow-hidden rounded-xl">
      <div className="absolute top-1/2 left-4 z-10 -translate-y-1/2">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-black/50 border-0 text-white hover:bg-black/70"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Previous</span>
        </Button>
      </div>

      <div className="absolute top-1/2 right-4 z-10 -translate-y-1/2">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-black/50 border-0 text-white hover:bg-black/70"
          onClick={nextSlide}
        >
          <ChevronRight className="h-6 w-6" />
          <span className="sr-only">Next</span>
        </Button>
      </div>

      <div
        ref={slideRef}
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {featuredMovies.map((movie) => (
          <div key={movie.id} className="min-w-full">
            <div className="relative h-[400px] md:h-[500px] w-full">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${movie.image})`,
                  backgroundPosition: movie.alignment,
                  objectFit: "cover",
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
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {featuredMovies.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-all",
              currentIndex === index ? "bg-[#FC174D] w-6" : "bg-white/50"
            )}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
