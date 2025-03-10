"use client"
import Link from "next/link"
import { Star, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Mock data for movies
const moviesData = {
  "now-showing": [
    {
      id: "dune-part-two",
      title: "Dune: Part Two",
      image: "/dune-part-two-poster.png",
      rating: 8.7,
      duration: "166 min",
      genres: ["Sci-Fi", "Adventure"],
    },
    {
      id: "godzilla-kong",
      title: "Godzilla x Kong",
      image: "/godzilla-kong-movie-poster.png",
      rating: 7.8,
      duration: "132 min",
      genres: ["Action", "Sci-Fi"],
    },
    {
      id: "kung-fu-panda-4",
      title: "Kung Fu Panda 4",
      image: "/placeholder.svg?height=400&width=300&query=kung fu panda 4 movie poster",
      rating: 7.3,
      duration: "94 min",
      genres: ["Animation", "Comedy"],
    },
    {
      id: "ghostbusters-frozen-empire",
      title: "Ghostbusters: Frozen Empire",
      image: "/placeholder.svg?height=400&width=300&query=ghostbusters frozen empire movie poster",
      rating: 7.1,
      duration: "115 min",
      genres: ["Comedy", "Fantasy"],
    },
    {
      id: "imaginary",
      title: "Imaginary",
      image: "/placeholder.svg?height=400&width=300&query=imaginary horror movie poster",
      rating: 6.5,
      duration: "104 min",
      genres: ["Horror", "Thriller"],
    },
    {
      id: "the-fall-guy",
      title: "The Fall Guy",
      image: "/placeholder.svg?height=400&width=300&query=the fall guy movie poster",
      rating: 7.9,
      duration: "126 min",
      genres: ["Action", "Comedy"],
    },
  ],
  "coming-soon": [
    {
      id: "deadpool-wolverine",
      title: "Deadpool & Wolverine",
      image: "/placeholder.svg?height=400&width=300&query=deadpool wolverine movie poster",
      rating: 9.0,
      duration: "TBA",
      genres: ["Action", "Comedy"],
      releaseDate: "July 26, 2024",
    },
    {
      id: "furiosa",
      title: "Furiosa: A Mad Max Saga",
      image: "/placeholder.svg?height=400&width=300&query=furiosa mad max movie poster",
      rating: 8.5,
      duration: "148 min",
      genres: ["Action", "Adventure"],
      releaseDate: "May 24, 2024",
    },
    {
      id: "inside-out-2",
      title: "Inside Out 2",
      image: "/placeholder.svg?height=400&width=300&query=inside out 2 movie poster",
      rating: 8.2,
      duration: "TBA",
      genres: ["Animation", "Comedy"],
      releaseDate: "June 14, 2024",
    },
    {
      id: "a-quiet-place-day-one",
      title: "A Quiet Place: Day One",
      image: "/placeholder.svg?height=400&width=300&query=a quiet place day one movie poster",
      rating: 7.8,
      duration: "TBA",
      genres: ["Horror", "Sci-Fi"],
      releaseDate: "June 28, 2024",
    },
  ],
}

interface MovieGridProps {
  category: "now-showing" | "coming-soon"
}

export default function MovieGrid({ category }: MovieGridProps) {
  const movies = moviesData[category]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mt-6">
      {movies.map((movie) => (
        <Link href={`/movies/${movie.id}`} key={movie.id} className="group">
          <div className="movie-card bg-zinc-800 rounded-lg overflow-hidden">
            <div className="relative aspect-[2/3] overflow-hidden">
              <img
                src={movie.image || "/placeholder.svg"}
                alt={movie.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute top-2 left-2 flex items-center bg-black/70 px-2 py-1 rounded text-white text-xs">
                <Star className="h-3 w-3 mr-1 fill-[#FC174D] text-[#FC174D]" />
                <span>{movie.rating}</span>
              </div>
            </div>

            <div className="p-3">
              <h3 className="font-semibold text-white line-clamp-1 group-hover:text-[#FC174D] transition-colors">
                {movie.title}
              </h3>

              <div className="flex items-center text-xs text-gray-400 mt-1">
                <Clock className="h-3 w-3 mr-1" />
                <span>{movie.duration}</span>
              </div>

              <div className="flex flex-wrap gap-1 mt-2">
                {movie.genres.map((genre) => (
                  <span key={genre} className="text-xs bg-zinc-700 text-gray-300 px-2 py-0.5 rounded">
                    {genre}
                  </span>
                ))}
              </div>

              {category === "coming-soon" && movie.releaseDate && (
                <div className="mt-2 text-xs text-[#FC174D]">{movie.releaseDate}</div>
              )}

              <div
                className={cn(
                  "mt-3",
                  category === "coming-soon" ? "opacity-0 group-hover:opacity-100 transition-opacity" : "",
                )}
              >
                <Button size="sm" className="w-full bg-[#FC174D] hover:bg-[#d91341] text-white text-xs">
                  {category === "now-showing" ? "Book Now" : "Notify Me"}
                </Button>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
