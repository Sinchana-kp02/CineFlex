// Types for movie data
export interface MovieCast {
  name: string;
  role: string;
  image: string;
}

export interface Movie {
  id: string;
  title: string;
  image: string;
  backdrop: string;
  rating: number;
  duration: string;
  releaseDate: string;
  genres: string[];
  languages: string[];
  description: string;
  director: string;
  cast: MovieCast[];
  trailerUrl: string;
}

// Featured movies data for the home page slider
export const featuredMovies = [
  {
    id: "dune-part-two",
    title: "Dune: Part Two",
    image: "/movies/dune-part-two/landscape.png",
    rating: 8.7,
    releaseDate: "March 1, 2024",
    alignment: "top center",
    description:
      "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
  },
  {
    id: "the-batman",
    title: "The Batman",
    image: "/movies/the-batman/landscape.png",
    rating: 8.3,
    releaseDate: "March 4, 2022",
    alignment: "top center",
    description:
      "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption.",
  },
  {
    id: "oppenheimer",
    title: "Oppenheimer",
    image: "/movies/oppenheimer/landscape.png",
    rating: 8.5,
    releaseDate: "July 21, 2023",
    alignment: "center",
    description:
      "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
  },
  {
    id: "godzilla-kong",
    title: "Godzilla x Kong: The New Empire",
    image: "/movies/godzilla-kong/landscape.png",
    rating: 7.8,
    releaseDate: "March 29, 2024",
    alignment: "top center",
    description:
      "Two ancient titans, Godzilla and Kong, clash in an epic battle as humans unravel their intertwined origins.",
  },
];

// Detailed movie data
export const moviesData: Record<string, Movie> = {
  "dune-part-two": {
    id: "dune-part-two",
    title: "Dune: Part Two",
    image: "/movies/dune-part-two/poster.png",
    backdrop: "/movies/dune-part-two/backdrop.png",
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
        image: "/timothee-chalamet-headshot.png",
      },
      {
        name: "Zendaya",
        role: "Chani",
        image: "/zendaya-headshot.png",
      },
      {
        name: "Rebecca Ferguson",
        role: "Lady Jessica",
        image: "/rebecca-ferguson-headshot.png",
      },
      {
        name: "Josh Brolin",
        role: "Gurney Halleck",
        image:
          "/placeholder.svg?height=200&width=200&query=Josh Brolin actor headshot",
      },
      {
        name: "Javier Bardem",
        role: "Stilgar",
        image:
          "/placeholder.svg?height=200&width=200&query=Javier Bardem actor headshot",
      },
      {
        name: "Austin Butler",
        role: "Feyd-Rautha",
        image:
          "/placeholder.svg?height=200&width=200&query=Austin Butler actor headshot",
      },
    ],
    trailerUrl: "https://www.youtube.com/embed/Way9Dexny3w",
  },
  "the-batman": {
    id: "the-batman",
    title: "The Batman",
    image: "/movies/the-batman/poster.png",
    backdrop: "/movies/the-batman/backdrop.png",
    rating: 8.3,
    duration: "176 min",
    releaseDate: "March 4, 2022",
    genres: ["Action", "Crime", "Drama"],
    languages: ["English"],
    description:
      "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
    director: "Matt Reeves",
    cast: [
      {
        name: "Robert Pattinson",
        role: "Bruce Wayne / Batman",
        image:
          "/placeholder.svg?height=200&width=200&query=Robert Pattinson actor headshot",
      },
      {
        name: "Zoë Kravitz",
        role: "Selina Kyle / Catwoman",
        image:
          "/placeholder.svg?height=200&width=200&query=Zoe Kravitz actress headshot",
      },
      {
        name: "Paul Dano",
        role: "Edward Nashton / Riddler",
        image:
          "/placeholder.svg?height=200&width=200&query=Paul Dano actor headshot",
      },
      {
        name: "Jeffrey Wright",
        role: "James Gordon",
        image:
          "/placeholder.svg?height=200&width=200&query=Jeffrey Wright actor headshot",
      },
      {
        name: "Colin Farrell",
        role: "Oz Cobb / Penguin",
        image:
          "/placeholder.svg?height=200&width=200&query=Colin Farrell actor headshot",
      },
      {
        name: "Andy Serkis",
        role: "Alfred Pennyworth",
        image:
          "/placeholder.svg?height=200&width=200&query=Andy Serkis actor headshot",
      },
    ],
    trailerUrl: "https://www.youtube.com/embed/mqqft2x_Aa4",
  },
  oppenheimer: {
    id: "oppenheimer",
    title: "Oppenheimer",
    image: "/movies/oppenheimer/poster.png",
    backdrop: "/movies/oppenheimer/backdrop.png",
    rating: 8.5,
    duration: "180 min",
    releaseDate: "July 21, 2023",
    genres: ["Biography", "Drama", "History"],
    languages: ["English"],
    description:
      "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb. Exploring the ethical dilemmas and personal struggles he faced as the 'father of the atomic bomb'.",
    director: "Christopher Nolan",
    cast: [
      {
        name: "Cillian Murphy",
        role: "J. Robert Oppenheimer",
        image:
          "/placeholder.svg?height=200&width=200&query=Cillian Murphy actor headshot",
      },
      {
        name: "Emily Blunt",
        role: "Katherine Oppenheimer",
        image:
          "/placeholder.svg?height=200&width=200&query=Emily Blunt actress headshot",
      },
      {
        name: "Matt Damon",
        role: "Leslie Groves",
        image:
          "/placeholder.svg?height=200&width=200&query=Matt Damon actor headshot",
      },
      {
        name: "Robert Downey Jr.",
        role: "Lewis Strauss",
        image:
          "/placeholder.svg?height=200&width=200&query=Robert Downey Jr actor headshot",
      },
      {
        name: "Florence Pugh",
        role: "Jean Tatlock",
        image:
          "/placeholder.svg?height=200&width=200&query=Florence Pugh actress headshot",
      },
      {
        name: "Rami Malek",
        role: "Scientist",
        image:
          "/placeholder.svg?height=200&width=200&query=Rami Malek actor headshot",
      },
    ],
    trailerUrl: "https://www.youtube.com/embed/uYPbbksJxIg",
  },
  "godzilla-kong": {
    id: "godzilla-kong",
    title: "Godzilla x Kong: The New Empire",
    image: "/movies/godzilla-kong/poster.png",
    backdrop: "/movies/godzilla-kong/backdrop.png",
    rating: 7.8,
    duration: "115 min",
    releaseDate: "March 29, 2024",
    genres: ["Action", "Sci-Fi", "Adventure"],
    languages: ["English"],
    description:
      "Two ancient titans, Godzilla and Kong, clash in an epic battle as humans unravel their intertwined origins and connection to Skull Island's mysteries. Together they face a colossal threat that challenges their existence and our own.",
    director: "Adam Wingard",
    cast: [
      {
        name: "Rebecca Hall",
        role: "Dr. Ilene Andrews",
        image:
          "/placeholder.svg?height=200&width=200&query=Rebecca Hall actress headshot",
      },
      {
        name: "Brian Tyree Henry",
        role: "Bernie Hayes",
        image:
          "/placeholder.svg?height=200&width=200&query=Brian Tyree Henry actor headshot",
      },
      {
        name: "Dan Stevens",
        role: "Trapper",
        image:
          "/placeholder.svg?height=200&width=200&query=Dan Stevens actor headshot",
      },
      {
        name: "Kaylee Hottle",
        role: "Jia",
        image:
          "/placeholder.svg?height=200&width=200&query=Kaylee Hottle actress headshot",
      },
      {
        name: "Alex Ferns",
        role: "Mikael",
        image:
          "/placeholder.svg?height=200&width=200&query=Alex Ferns actor headshot",
      },
      {
        name: "Fala Chen",
        role: "Queen Iwi",
        image:
          "/placeholder.svg?height=200&width=200&query=Fala Chen actress headshot",
      },
    ],
    trailerUrl: "https://www.youtube.com/embed/odM92ap8_c0",
  },
};

// Function to get movie details by ID
export function getMovieById(id: string): Movie {
  return (
    moviesData[id] || {
      id,
      title: "Movie Not Found",
      image:
        "/placeholder.svg?height=600&width=400&query=movie poster placeholder",
      backdrop:
        "/placeholder.svg?height=1080&width=1920&query=movie backdrop placeholder",
      rating: 0,
      duration: "N/A",
      releaseDate: "N/A",
      genres: [],
      languages: [],
      description: "Movie details not available.",
      director: "N/A",
      cast: [],
      trailerUrl: "",
    }
  );
}

// Now showing movies data
export const nowShowingMovies = [
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
    image: "/kung-fu-panda-4-poster.png",
    rating: 7.3,
    duration: "94 min",
    genres: ["Animation", "Comedy"],
  },
  {
    id: "ghostbusters-frozen-empire",
    title: "Ghostbusters: Frozen Empire",
    image:
      "/placeholder.svg?height=400&width=300&query=ghostbusters frozen empire movie poster",
    rating: 7.1,
    duration: "115 min",
    genres: ["Comedy", "Fantasy"],
  },
  {
    id: "imaginary",
    title: "Imaginary",
    image:
      "/placeholder.svg?height=400&width=300&query=imaginary horror movie poster",
    rating: 6.5,
    duration: "104 min",
    genres: ["Horror", "Thriller"],
  },
  {
    id: "the-fall-guy",
    title: "The Fall Guy",
    image:
      "/placeholder.svg?height=400&width=300&query=the fall guy movie poster",
    rating: 7.9,
    duration: "126 min",
    genres: ["Action", "Comedy"],
  },
];

// Coming soon movies data
export const comingSoonMovies = [
  {
    id: "deadpool-wolverine",
    title: "Deadpool & Wolverine",
    image:
      "/placeholder.svg?height=400&width=300&query=deadpool wolverine movie poster",
    rating: 9.0,
    duration: "TBA",
    genres: ["Action", "Comedy"],
    releaseDate: "July 26, 2024",
  },
  {
    id: "furiosa",
    title: "Furiosa: A Mad Max Saga",
    image:
      "/placeholder.svg?height=400&width=300&query=furiosa mad max movie poster",
    rating: 8.5,
    duration: "148 min",
    genres: ["Action", "Adventure"],
    releaseDate: "May 24, 2024",
  },
  {
    id: "inside-out-2",
    title: "Inside Out 2",
    image:
      "/placeholder.svg?height=400&width=300&query=inside out 2 movie poster",
    rating: 8.2,
    duration: "TBA",
    genres: ["Animation", "Comedy"],
    releaseDate: "June 14, 2024",
  },
  {
    id: "a-quiet-place-day-one",
    title: "A Quiet Place: Day One",
    image:
      "/placeholder.svg?height=400&width=300&query=a quiet place day one movie poster",
    rating: 7.8,
    duration: "TBA",
    genres: ["Horror", "Sci-Fi"],
    releaseDate: "June 28, 2024",
  },
];
