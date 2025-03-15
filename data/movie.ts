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
        image: "/josh-brolin-headshot.png",
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
  "kung-fu-panda-4": {
    id: "kung-fu-panda-4",
    title: "Kung Fu Panda 4",
    image: "/kung-fu-panda-4-poster.png",
    backdrop:
      "/placeholder.svg?height=1080&width=1920&query=kung fu panda 4 movie scene",
    rating: 7.3,
    duration: "94 min",
    releaseDate: "March 8, 2024",
    genres: ["Animation", "Comedy", "Action", "Adventure"],
    languages: ["English"],
    description:
      "Po is called upon to become the Spiritual Leader of the Valley of Peace. However, he needs to find and train a new Dragon Warrior before he can assume his new position, while a shape-shifting sorceress has her sights set on his Staff of Wisdom.",
    director: "Mike Mitchell",
    cast: [
      {
        name: "Jack Black",
        role: "Po (voice)",
        image:
          "/placeholder.svg?height=200&width=200&query=Jack Black actor headshot",
      },
      {
        name: "Awkwafina",
        role: "Zhen (voice)",
        image:
          "/placeholder.svg?height=200&width=200&query=Awkwafina actress headshot",
      },
      {
        name: "Viola Davis",
        role: "Chameleon (voice)",
        image:
          "/placeholder.svg?height=200&width=200&query=Viola Davis actress headshot",
      },
      {
        name: "Bryan Cranston",
        role: "Po's Birth Father (voice)",
        image:
          "/placeholder.svg?height=200&width=200&query=Bryan Cranston actor headshot",
      },
      {
        name: "Dustin Hoffman",
        role: "Master Shifu (voice)",
        image:
          "/placeholder.svg?height=200&width=200&query=Dustin Hoffman actor headshot",
      },
      {
        name: "James Hong",
        role: "Mr. Ping (voice)",
        image:
          "/placeholder.svg?height=200&width=200&query=James Hong actor headshot",
      },
    ],
    trailerUrl: "https://www.youtube.com/embed/HiYHZMIzKVA",
  },
  "ghostbusters-frozen-empire": {
    id: "ghostbusters-frozen-empire",
    title: "Ghostbusters: Frozen Empire",
    image:
      "/placeholder.svg?height=400&width=300&query=ghostbusters frozen empire movie poster",
    backdrop:
      "/placeholder.svg?height=1080&width=1920&query=ghostbusters frozen empire movie scene",
    rating: 7.1,
    duration: "115 min",
    releaseDate: "March 22, 2024",
    genres: ["Comedy", "Fantasy", "Adventure", "Action"],
    languages: ["English"],
    description:
      "When the discovery of an ancient artifact unleashes an evil force, Ghostbusters new and old must join forces to protect their home and save the world from a second ice age.",
    director: "Gil Kenan",
    cast: [
      {
        name: "Paul Rudd",
        role: "Gary Grooberson",
        image:
          "/placeholder.svg?height=200&width=200&query=Paul Rudd actor headshot",
      },
      {
        name: "Carrie Coon",
        role: "Callie Spengler",
        image:
          "/placeholder.svg?height=200&width=200&query=Carrie Coon actress headshot",
      },
      {
        name: "Finn Wolfhard",
        role: "Trevor Spengler",
        image:
          "/placeholder.svg?height=200&width=200&query=Finn Wolfhard actor headshot",
      },
      {
        name: "Mckenna Grace",
        role: "Phoebe Spengler",
        image:
          "/placeholder.svg?height=200&width=200&query=Mckenna Grace actress headshot",
      },
      {
        name: "Bill Murray",
        role: "Dr. Peter Venkman",
        image:
          "/placeholder.svg?height=200&width=200&query=Bill Murray actor headshot",
      },
      {
        name: "Dan Aykroyd",
        role: "Dr. Raymond Stantz",
        image:
          "/placeholder.svg?height=200&width=200&query=Dan Aykroyd actor headshot",
      },
    ],
    trailerUrl: "https://www.youtube.com/embed/gN3K-wYI-JQ",
  },
  imaginary: {
    id: "imaginary",
    title: "Imaginary",
    image:
      "/placeholder.svg?height=400&width=300&query=imaginary horror movie poster",
    backdrop:
      "/placeholder.svg?height=1080&width=1920&query=imaginary horror movie scene",
    rating: 6.5,
    duration: "104 min",
    releaseDate: "March 8, 2024",
    genres: ["Horror", "Thriller", "Mystery"],
    languages: ["English"],
    description:
      "A woman returns to her childhood home to discover that the imaginary friend she left behind is very real and unhappy that she abandoned him.",
    director: "Jeff Wadlow",
    cast: [
      {
        name: "DeWanda Wise",
        role: "Jessica",
        image:
          "/placeholder.svg?height=200&width=200&query=DeWanda Wise actress headshot",
      },
      {
        name: "Tom Payne",
        role: "Max",
        image:
          "/placeholder.svg?height=200&width=200&query=Tom Payne actor headshot",
      },
      {
        name: "Taegen Burns",
        role: "Taylor",
        image:
          "/placeholder.svg?height=200&width=200&query=Taegen Burns actress headshot",
      },
      {
        name: "Pyper Braun",
        role: "Alice",
        image:
          "/placeholder.svg?height=200&width=200&query=Pyper Braun actress headshot",
      },
      {
        name: "Betty Buckley",
        role: "Gloria",
        image:
          "/placeholder.svg?height=200&width=200&query=Betty Buckley actress headshot",
      },
      {
        name: "Veronica Falcón",
        role: "Dr. Soto",
        image:
          "/placeholder.svg?height=200&width=200&query=Veronica Falcon actress headshot",
      },
    ],
    trailerUrl: "https://www.youtube.com/embed/R4cdGgMTaQU",
  },
  "the-fall-guy": {
    id: "the-fall-guy",
    title: "The Fall Guy",
    image:
      "/placeholder.svg?height=400&width=300&query=the fall guy movie poster",
    backdrop:
      "/placeholder.svg?height=1080&width=1920&query=the fall guy movie scene",
    rating: 7.9,
    duration: "126 min",
    releaseDate: "May 3, 2024",
    genres: ["Action", "Comedy", "Adventure"],
    languages: ["English"],
    description:
      "A stuntman is drawn back into service when a movie star goes missing, forcing him to use his unique skills to find the culprits and solve the mystery while falling in love with the film's director.",
    director: "David Leitch",
    cast: [
      {
        name: "Ryan Gosling",
        role: "Colt Seavers",
        image:
          "/placeholder.svg?height=200&width=200&query=Ryan Gosling actor headshot",
      },
      {
        name: "Emily Blunt",
        role: "Jody Moreno",
        image:
          "/placeholder.svg?height=200&width=200&query=Emily Blunt actress headshot",
      },
      {
        name: "Aaron Taylor-Johnson",
        role: "Tom Ryder",
        image:
          "/placeholder.svg?height=200&width=200&query=Aaron Taylor-Johnson actor headshot",
      },
      {
        name: "Hannah Waddingham",
        role: "Gail Meyer",
        image:
          "/placeholder.svg?height=200&width=200&query=Hannah Waddingham actress headshot",
      },
      {
        name: "Winston Duke",
        role: "Dan Tucker",
        image:
          "/placeholder.svg?height=200&width=200&query=Winston Duke actor headshot",
      },
      {
        name: "Stephanie Hsu",
        role: "Alma",
        image:
          "/placeholder.svg?height=200&width=200&query=Stephanie Hsu actress headshot",
      },
    ],
    trailerUrl: "https://www.youtube.com/embed/qLzS0QZhCS4",
  },
  "deadpool-wolverine": {
    id: "deadpool-wolverine",
    title: "Deadpool & Wolverine",
    image:
      "/placeholder.svg?height=400&width=300&query=deadpool wolverine movie poster",
    backdrop:
      "/placeholder.svg?height=1080&width=1920&query=deadpool wolverine movie scene",
    rating: 9.0,
    duration: "127 min",
    releaseDate: "July 26, 2024",
    genres: ["Action", "Comedy", "Adventure", "Sci-Fi"],
    languages: ["English"],
    description:
      "Deadpool finds himself recruited by the Time Variance Authority to team up with Wolverine for a mission that could change the fate of the multiverse, leading to an unlikely partnership filled with action and irreverent humor.",
    director: "Shawn Levy",
    cast: [
      {
        name: "Ryan Reynolds",
        role: "Wade Wilson / Deadpool",
        image:
          "/placeholder.svg?height=200&width=200&query=Ryan Reynolds actor headshot",
      },
      {
        name: "Hugh Jackman",
        role: "Logan / Wolverine",
        image:
          "/placeholder.svg?height=200&width=200&query=Hugh Jackman actor headshot",
      },
      {
        name: "Emma Corrin",
        role: "Cassandra Nova",
        image:
          "/placeholder.svg?height=200&width=200&query=Emma Corrin actress headshot",
      },
      {
        name: "Morena Baccarin",
        role: "Vanessa",
        image:
          "/placeholder.svg?height=200&width=200&query=Morena Baccarin actress headshot",
      },
      {
        name: "Matthew Macfadyen",
        role: "Mr. Paradox",
        image:
          "/placeholder.svg?height=200&width=200&query=Matthew Macfadyen actor headshot",
      },
      {
        name: "Rob Delaney",
        role: "Peter",
        image:
          "/placeholder.svg?height=200&width=200&query=Rob Delaney actor headshot",
      },
    ],
    trailerUrl: "https://www.youtube.com/embed/Yd47Z8HYf0Y",
  },
  furiosa: {
    id: "furiosa",
    title: "Furiosa: A Mad Max Saga",
    image:
      "/placeholder.svg?height=400&width=300&query=furiosa mad max movie poster",
    backdrop:
      "/placeholder.svg?height=1080&width=1920&query=furiosa mad max movie scene",
    rating: 8.5,
    duration: "148 min",
    releaseDate: "May 24, 2024",
    genres: ["Action", "Adventure", "Sci-Fi", "Thriller"],
    languages: ["English"],
    description:
      "The origin story of renegade warrior Furiosa before her encounter with Max Rockatansky. Young Furiosa is kidnapped from the Green Place of Many Mothers and falls into the hands of a great Biker Horde led by the Warlord Dementus.",
    director: "George Miller",
    cast: [
      {
        name: "Anya Taylor-Joy",
        role: "Furiosa",
        image:
          "/placeholder.svg?height=200&width=200&query=Anya Taylor-Joy actress headshot",
      },
      {
        name: "Chris Hemsworth",
        role: "Dementus",
        image:
          "/placeholder.svg?height=200&width=200&query=Chris Hemsworth actor headshot",
      },
      {
        name: "Tom Burke",
        role: "Jack",
        image:
          "/placeholder.svg?height=200&width=200&query=Tom Burke actor headshot",
      },
      {
        name: "Alyla Browne",
        role: "Young Furiosa",
        image:
          "/placeholder.svg?height=200&width=200&query=Alyla Browne actress headshot",
      },
      {
        name: "Lachy Hulme",
        role: "Immortan Joe / General Praetorian Jack",
        image:
          "/placeholder.svg?height=200&width=200&query=Lachy Hulme actor headshot",
      },
      {
        name: "Nathan Jones",
        role: "Rictus Erectus",
        image:
          "/placeholder.svg?height=200&width=200&query=Nathan Jones actor headshot",
      },
    ],
    trailerUrl: "https://www.youtube.com/embed/XdKzUbAiswE",
  },
  "inside-out-2": {
    id: "inside-out-2",
    title: "Inside Out 2",
    image:
      "/placeholder.svg?height=400&width=300&query=inside out 2 movie poster",
    backdrop:
      "/placeholder.svg?height=1080&width=1920&query=inside out 2 movie scene",
    rating: 8.2,
    duration: "96 min",
    releaseDate: "June 14, 2024",
    genres: ["Animation", "Comedy", "Adventure", "Family"],
    languages: ["English"],
    description:
      "As Riley enters her teenage years, her emotions face a major upheaval when new emotions arrive, including Anxiety, Envy, Ennui, and Embarrassment. Joy and the team must learn to work with these new emotions as Riley navigates the challenges of adolescence.",
    director: "Kelsey Mann",
    cast: [
      {
        name: "Amy Poehler",
        role: "Joy (voice)",
        image:
          "/placeholder.svg?height=200&width=200&query=Amy Poehler actress headshot",
      },
      {
        name: "Maya Hawke",
        role: "Anxiety (voice)",
        image:
          "/placeholder.svg?height=200&width=200&query=Maya Hawke actress headshot",
      },
      {
        name: "Kensington Tallman",
        role: "Riley (voice)",
        image:
          "/placeholder.svg?height=200&width=200&query=Kensington Tallman actress headshot",
      },
      {
        name: "Liza Lapira",
        role: "Disgust (voice)",
        image:
          "/placeholder.svg?height=200&width=200&query=Liza Lapira actress headshot",
      },
      {
        name: "Tony Hale",
        role: "Fear (voice)",
        image:
          "/placeholder.svg?height=200&width=200&query=Tony Hale actor headshot",
      },
      {
        name: "Lewis Black",
        role: "Anger (voice)",
        image:
          "/placeholder.svg?height=200&width=200&query=Lewis Black actor headshot",
      },
    ],
    trailerUrl: "https://www.youtube.com/embed/VnR9Ql5vscw",
  },
  "a-quiet-place-day-one": {
    id: "a-quiet-place-day-one",
    title: "A Quiet Place: Day One",
    image:
      "/placeholder.svg?height=400&width=300&query=a quiet place day one movie poster",
    backdrop:
      "/placeholder.svg?height=1080&width=1920&query=a quiet place day one movie scene",
    rating: 7.8,
    duration: "104 min",
    releaseDate: "June 28, 2024",
    genres: ["Horror", "Sci-Fi", "Thriller"],
    languages: ["English"],
    description:
      "Experience the day the world went quiet. This prequel to the original films explores the beginning of the alien invasion that forced humanity to live in silence, focusing on the first day of the arrival in New York City.",
    director: "Michael Sarnoski",
    cast: [
      {
        name: "Lupita Nyong'o",
        role: "Sam",
        image:
          "/placeholder.svg?height=200&width=200&query=Lupita Nyong'o actress headshot",
      },
      {
        name: "Joseph Quinn",
        role: "Eric",
        image:
          "/placeholder.svg?height=200&width=200&query=Joseph Quinn actor headshot",
      },
      {
        name: "Alex Wolff",
        role: "Ethan",
        image:
          "/placeholder.svg?height=200&width=200&query=Alex Wolff actor headshot",
      },
      {
        name: "Djimon Hounsou",
        role: "Paris",
        image:
          "/placeholder.svg?height=200&width=200&query=Djimon Hounsou actor headshot",
      },
      {
        name: "Amélie Hoeferle",
        role: "Olivia",
        image:
          "/placeholder.svg?height=200&width=200&query=Amélie Hoeferle actress headshot",
      },
      {
        name: "Phoebe Waller-Bridge",
        role: "Cameo",
        image:
          "/placeholder.svg?height=200&width=200&query=Phoebe Waller-Bridge actress headshot",
      },
    ],
    trailerUrl: "https://www.youtube.com/embed/EIAa7kgGYC4",
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
    image: "/movies/dune-part-two/portrait.webp",
    rating: 8.7,
    duration: "166 min",
    genres: ["Sci-Fi", "Adventure"],
  },
  {
    id: "godzilla-kong",
    title: "Godzilla x Kong",
    image: "/movies/godzilla-kong/portrait.jpg",
    rating: 7.8,
    duration: "132 min",
    genres: ["Action", "Sci-Fi"],
  },
  {
    id: "kung-fu-panda-4",
    title: "Kung Fu Panda 4",
    image: "/movies/kung-fu-panda-4/portrait.jpg",
    rating: 7.3,
    duration: "94 min",
    genres: ["Animation", "Comedy"],
  },
  {
    id: "ghostbusters-frozen-empire",
    title: "Ghostbusters: Frozen Empire",
    image: "/movies/ghostbusters-frozen-empire/portrait.jpg",
    rating: 7.1,
    duration: "115 min",
    genres: ["Comedy", "Fantasy"],
  },
  {
    id: "imaginary",
    title: "Imaginary",
    image: "/movies/imaginary/portrait.jpg",
    rating: 6.5,
    duration: "104 min",
    genres: ["Horror", "Thriller"],
  },
  {
    id: "the-fall-guy",
    title: "The Fall Guy",
    image: "/movies/the-fall-guy/portrait.jpg",
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
