import { Button } from "@/components/ui/button"
import { Star, Clock, Calendar, MessageCircle, Share2, Heart, Play } from "lucide-react"
import Link from "next/link"
import CastCrew from "@/components/cast-crew"

// Mock data for movie details
const getMovieDetails = (id: string) => {
  return {
    id,
    title: id === "dune-part-two" ? "Dune: Part Two" : "Movie Title",
    image: `/placeholder.svg?height=600&width=400&query=${id} movie poster`,
    backdrop: `/placeholder.svg?height=1080&width=1920&query=${id} movie scene cinematic`,
    rating: 8.7,
    duration: "166 min",
    releaseDate: "March 1, 2024",
    genres: ["Sci-Fi", "Adventure", "Drama"],
    languages: ["English", "Spanish", "French"],
    description:
      "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. As he begins a spiritual and martial journey to become a religious leader, he faces the ultimate choice between the love of his life and the fate of the universe.",
    director: "Denis Villeneuve",
    cast: [
      {
        name: "Timothée Chalamet",
        role: "Paul Atreides",
        image: "/placeholder.svg?height=200&width=200&query=Timothee Chalamet actor headshot",
      },
      { name: "Zendaya", role: "Chani", image: "/placeholder.svg?height=200&width=200&query=Zendaya actress headshot" },
      {
        name: "Rebecca Ferguson",
        role: "Lady Jessica",
        image: "/placeholder.svg?height=200&width=200&query=Rebecca Ferguson actress headshot",
      },
      {
        name: "Josh Brolin",
        role: "Gurney Halleck",
        image: "/placeholder.svg?height=200&width=200&query=Josh Brolin actor headshot",
      },
      {
        name: "Javier Bardem",
        role: "Stilgar",
        image: "/placeholder.svg?height=200&width=200&query=Javier Bardem actor headshot",
      },
      {
        name: "Austin Butler",
        role: "Feyd-Rautha",
        image: "/placeholder.svg?height=200&width=200&query=Austin Butler actor headshot",
      },
    ],
    trailerUrl: "https://www.youtube.com/embed/Way9Dexny3w",
  }
}

export default function MovieDetailsPage({ params }: { params: { id: string } }) {
  const movie = getMovieDetails(params.id)

  return (
    <main className="flex-1">
      {/* Movie Backdrop */}
      <div className="relative h-[50vh] md:h-[70vh] w-full">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${movie.backdrop})` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />

        <div className="absolute inset-0 flex items-center justify-center">
          <Button
            variant="outline"
            size="icon"
            className="w-16 h-16 rounded-full bg-[#FC174D]/80 border-0 text-white hover:bg-[#FC174D] hover:scale-110 transition-all"
          >
            <Play className="h-8 w-8 fill-white" />
            <span className="sr-only">Play Trailer</span>
          </Button>
        </div>
      </div>

      {/* Movie Details */}
      <div className="container px-4 md:px-6 -mt-32 relative z-10">
        <div className="grid md:grid-cols-[300px_1fr] gap-8">
          {/* Movie Poster */}
          <div className="hidden md:block">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img src={movie.image || "/placeholder.svg"} alt={movie.title} className="w-full h-auto" />
            </div>

            <div className="mt-6 space-y-4">
              <Button className="w-full bg-[#FC174D] hover:bg-[#d91341] text-white">
                <Link href={`/booking/${movie.id}`}>Book Tickets</Link>
              </Button>

              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="flex-1 text-white border-zinc-700 hover:bg-zinc-800">
                  <Heart className="h-5 w-5" />
                  <span className="sr-only">Add to Wishlist</span>
                </Button>
                <Button variant="outline" size="icon" className="flex-1 text-white border-zinc-700 hover:bg-zinc-800">
                  <Share2 className="h-5 w-5" />
                  <span className="sr-only">Share</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Movie Info */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center bg-[#FC174D]/90 px-2 py-1 rounded text-white text-sm">
                <Star className="h-4 w-4 mr-1 fill-white" />
                <span>{movie.rating}/10</span>
              </div>
              <div className="flex items-center bg-black/60 px-2 py-1 rounded text-white text-sm">
                <Clock className="h-4 w-4 mr-1" />
                <span>{movie.duration}</span>
              </div>
              <div className="flex items-center bg-black/60 px-2 py-1 rounded text-white text-sm">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{movie.releaseDate}</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{movie.title}</h1>

            <div className="flex flex-wrap gap-2 mb-6">
              {movie.genres.map((genre) => (
                <span key={genre} className="text-sm bg-zinc-800 text-gray-300 px-3 py-1 rounded-full">
                  {genre}
                </span>
              ))}
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold text-white mb-2">Synopsis</h2>
              <p className="text-gray-300 leading-relaxed">{movie.description}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              <div>
                <h3 className="text-sm text-gray-400">Director</h3>
                <p className="text-white">{movie.director}</p>
              </div>
              <div>
                <h3 className="text-sm text-gray-400">Release Date</h3>
                <p className="text-white">{movie.releaseDate}</p>
              </div>
              <div>
                <h3 className="text-sm text-gray-400">Languages</h3>
                <p className="text-white">{movie.languages.join(", ")}</p>
              </div>
            </div>

            {/* Mobile Book Button */}
            <div className="md:hidden mb-8">
              <Button className="w-full bg-[#FC174D] hover:bg-[#d91341] text-white py-6 text-lg">
                <Link href={`/booking/${movie.id}`}>Book Tickets</Link>
              </Button>
            </div>

            {/* Cast & Crew */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">Cast & Crew</h2>
              <CastCrew cast={movie.cast} />
            </div>

            {/* Trailer */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">Trailer</h2>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src={movie.trailerUrl}
                  title={`${movie.title} Trailer`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

            {/* User Reviews */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-white">User Reviews</h2>
                <Button variant="outline" className="text-white border-zinc-700 hover:bg-zinc-800">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  <span>Write a Review</span>
                </Button>
              </div>

              <div className="space-y-4">
                <div className="bg-zinc-800 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-10 h-10 rounded-full bg-zinc-700 overflow-hidden">
                      <img
                        src="/placeholder.svg?height=40&width=40&query=person avatar"
                        alt="User Avatar"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">John Doe</h4>
                      <div className="flex items-center">
                        <Star className="h-3 w-3 fill-[#FC174D] text-[#FC174D]" />
                        <Star className="h-3 w-3 fill-[#FC174D] text-[#FC174D]" />
                        <Star className="h-3 w-3 fill-[#FC174D] text-[#FC174D]" />
                        <Star className="h-3 w-3 fill-[#FC174D] text-[#FC174D]" />
                        <Star className="h-3 w-3 text-gray-400" />
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300">
                    Villeneuve has done it again. This is a masterpiece of sci-fi filmmaking that expands on the first
                    film in every way. The visuals are breathtaking, the performances are stellar, and the story is epic
                    in scope.
                  </p>
                </div>

                <div className="bg-zinc-800 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-10 h-10 rounded-full bg-zinc-700 overflow-hidden">
                      <img
                        src="/placeholder.svg?height=40&width=40&query=woman avatar"
                        alt="User Avatar"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Jane Smith</h4>
                      <div className="flex items-center">
                        <Star className="h-3 w-3 fill-[#FC174D] text-[#FC174D]" />
                        <Star className="h-3 w-3 fill-[#FC174D] text-[#FC174D]" />
                        <Star className="h-3 w-3 fill-[#FC174D] text-[#FC174D]" />
                        <Star className="h-3 w-3 fill-[#FC174D] text-[#FC174D]" />
                        <Star className="h-3 w-3 fill-[#FC174D] text-[#FC174D]" />
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300">
                    One of the best sequels I've ever seen. The world-building is incredible, and the way the story
                    unfolds is both satisfying and thought-provoking. The cast is perfect, especially Zendaya who gets
                    much more screen time in this one.
                  </p>
                </div>
              </div>

              <div className="mt-4 text-center">
                <Button variant="link" className="text-[#FC174D]">
                  View All Reviews
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
