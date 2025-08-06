import React from "react";

const Movies = [
  {
      id: 1,
      title: "The Shawshank Redemption",
      director: "Frank Darabont",
      release: "1994",
      image: "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg"
    },
    {
      id: 2,
      title: "The Godfather",
      director: "Francis Ford Coppola",
      release: "1972",
      image: "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg"
    },
    {
      id: 3,
      title: "The Dark Knight",
      director: "Christopher Nolan",
      release: "2008",
      image: "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg"
    },
    {
      id: 4,
      title: "Pulp Fiction",
      director: "Quentin Tarantino",
      release: "1994",
      image: "https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg"
    },
    {
      id: 5,
      title: "Forrest Gump",
      director: "Robert Zemeckis",
      release: "1994",
      image: "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg"
    },
    {
      id: 6,
      title: "Inception",
      director: "Christopher Nolan",
      release: "2010",
      image: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg"
    },
    {
      id: 7,
      title: "Fight Club",
      director: "David Fincher",
      release: "1999",
      image: "https://upload.wikimedia.org/wikipedia/en/f/fc/Fight_Club_poster.jpg"
    },
    {
      id: 8,
      title: "The Matrix",
      director: "The Wachowskis",
      release: "1999",
      image: "https://upload.wikimedia.org/wikipedia/en/9/94/The_Matrix.jpg"
    },
    {
      id: 9,
      title: "Interstellar",
      director: "Christopher Nolan",
      release: "2014",
      image: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg"
    },
    {
      id: 10,
      title: "Parasite",
      director: "Bong Joon-ho",
      release: "2019",
      image: "https://upload.wikimedia.org/wikipedia/en/5/53/Parasite_%282019_film%29.png"
    },
    {
      id: 11,
      title: "The Silence of the Lambs",
      director: "Jonathan Demme",
      release: "1991",
      image: "https://upload.wikimedia.org/wikipedia/en/8/86/The_Silence_of_the_Lambs_poster.jpg"
    },
    {
      id: 12,
      title: "Whiplash",
      director: "Damien Chazelle",
      release: "2014",
      image: "https://upload.wikimedia.org/wikipedia/en/0/01/Whiplash_poster.jpg"
    },
    {
      id: 13,
      title: "Gladiator",
      director: "Ridley Scott",
      release: "2000",
      image: "https://upload.wikimedia.org/wikipedia/en/f/fb/Gladiator_%282000_film_poster%29.png"
    },
    {
      id: 14,
      title: "The Prestige",
      director: "Christopher Nolan",
      release: "2006",
      image: "https://upload.wikimedia.org/wikipedia/en/d/d2/Prestige_poster.jpg"
    },
    {
      id: 15,
      title: "Joker",
      director: "Todd Phillips",
      release: "2019",
      image: "https://upload.wikimedia.org/wikipedia/en/e/e1/Joker_%282019_film%29_poster.jpg"
    },
    {
      id: 16,
      title: "Avengers: Endgame",
      director: "Anthony and Joe Russo",
      release: "2019",
      image: "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg"
    },
    {
      id: 17,
      title: "Titanic",
      director: "James Cameron",
      release: "1997",
      image: "https://upload.wikimedia.org/wikipedia/en/1/18/Titanic_%281997_film%29_poster.png"
    },
    {
      id: 18,
      title: "The Social Network",
      director: "David Fincher",
      release: "2010",
      image: "https://upload.wikimedia.org/wikipedia/en/8/8c/The_Social_Network_film_poster.png"
    },
    {
      id: 19,
      title: "Good Will Hunting",
      director: "Gus Van Sant",
      release: "1997",
      image: "https://upload.wikimedia.org/wikipedia/en/5/52/Good_Will_Hunting.png"
    },
    {
      id: 20,
      title: "La La Land",
      director: "Damien Chazelle",
      release: "2016",
      image: "https://upload.wikimedia.org/wikipedia/en/a/ab/La_La_Land_%28film%29.png"
    },
    {
      id: 21,
      title: "The Revenant",
      director: "Alejandro González Iñárritu",
      release: "2015",
      image: "https://upload.wikimedia.org/wikipedia/en/b/b6/The_Revenant_2015_film_poster.jpg"
    },
    {
      id: 22,
      title: "The Wolf of Wall Street",
      director: "Martin Scorsese",
      release: "2013",
      image: "https://upload.wikimedia.org/wikipedia/en/d/d8/The_Wolf_of_Wall_Street_%282013%29.png"
    },
    {
      id: 23,
      title: "The Green Mile",
      director: "Frank Darabont",
      release: "1999",
      image: "https://upload.wikimedia.org/wikipedia/en/e/e2/The_Green_Mile_%28movie_poster%29.jpg"
    },
    {
      id: 24,
      title: "1917",
      director: "Sam Mendes",
      release: "2019",
      image: "https://upload.wikimedia.org/wikipedia/en/f/fe/1917_%282019%29_Film_Poster.jpeg"
    },
    {
      id: 25,
      title: "The Imitation Game",
      director: "Morten Tyldum",
      release: "2014",
      image: "https://upload.wikimedia.org/wikipedia/en/8/87/The_Imitation_Game_%282014%29.png"
    },
    {
      id: 26,
      title: "A Beautiful Mind",
      director: "Ron Howard",
      release: "2001",
      image: "https://upload.wikimedia.org/wikipedia/en/b/b8/A_Beautiful_Mind_Poster.jpg"
    },
    {
      id: 27,
      title: "Slumdog Millionaire",
      director: "Danny Boyle",
      release: "2008",
      image: "https://upload.wikimedia.org/wikipedia/en/9/92/Slumdog_Millionaire_poster.png"
    },
    {
      id: 28,
      title: "Black Swan",
      director: "Darren Aronofsky",
      release: "2010",
      image: "https://upload.wikimedia.org/wikipedia/en/6/68/Black_Swan_poster.jpg"
    },
    {
      id: 29,
      title: "Her",
      director: "Spike Jonze",
      release: "2013",
      image: "https://upload.wikimedia.org/wikipedia/en/4/44/Her2013Poster.jpg"
    },
    {
      id: 30,
      title: "The Pianist",
      director: "Roman Polanski",
      release: "2002",
      image: "https://upload.wikimedia.org/wikipedia/en/a/a6/The_Pianist_movie.jpg"
    }
];

export default Movies;
