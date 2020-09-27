const myFavoriteMovie = {
  title: "Lord of the Rings",
  duration: 200,
  stars: ["Frodo", "Gandalf", "Golem"],
};

const readFavoriteMovieInfo = (movie) => {
  return `${movie.title} lasts for ${movie.duration}. Stars: ${movie.stars.join(", ")}`;
};

console.log(readFavoriteMovieInfo(myFavoriteMovie));
