import { Input } from "@/components/ui/input";
import FeaturedMovies from "@/components/featured-movies";
import MovieGrid from "@/components/movie-grid";
import GenreFilter from "@/components/genre-filter";
import { Search } from "lucide-react";

export default function Home() {
  return (
    <main className="flex-1">
      <section className="bg-black pt-0">
        <FeaturedMovies />
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

      {/* Now Showing */}
      <section className="py-12 bg-zinc-900">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Now Showing
          </h2>
          <GenreFilter />
          <MovieGrid category="now-showing" />
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-12 bg-black">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Coming Soon
          </h2>
          <MovieGrid category="coming-soon" />
        </div>
      </section>
    </main>
  );
}
