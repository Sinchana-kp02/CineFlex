import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import FeaturedMovies from "@/components/featured-movies"
import MovieGrid from "@/components/movie-grid"
import GenreFilter from "@/components/genre-filter"
import { Search } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative">
        <div className="w-full h-[70vh] bg-gradient-to-r from-black to-transparent relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage: `url('/epic-movie-scene.png')`,
              opacity: 0.6,
            }}
          />
          <div className="container relative z-10 h-full flex flex-col justify-center px-4 md:px-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Dune: Part Two</h1>
            <p className="text-xl text-white/80 max-w-xl mb-6">
              Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who
              destroyed his family.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-[#FC174D] hover:bg-[#d91341] text-white">
                <Link href="/movies/dune-part-two">Book Now</Link>
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white/10">
                Watch Trailer
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="bg-black py-6">
        <div className="container px-4 md:px-6">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search for movies..."
              className="pl-10 bg-background/10 border-muted text-white placeholder:text-muted-foreground focus-visible:ring-[#FC174D]"
            />
          </div>
        </div>
      </section>

      {/* Featured Movies */}
      <section className="py-12 bg-black">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Featured Movies</h2>
          <FeaturedMovies />
        </div>
      </section>

      {/* Now Showing */}
      <section className="py-12 bg-zinc-900">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Now Showing</h2>
          <GenreFilter />
          <MovieGrid category="now-showing" />
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-12 bg-black">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Coming Soon</h2>
          <MovieGrid category="coming-soon" />
        </div>
      </section>
    </main>
  )
}
