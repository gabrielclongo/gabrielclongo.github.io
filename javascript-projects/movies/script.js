const apiKey = "63b0fa2e";

const moviesEl = document.getElementById("movies");
const searchInput = document.getElementById("search");


const randomQueries = [
  "batman",
  "avengers",
  "spiderman",
  "harry potter",
  "star wars",
  "fast",
  "matrix",
  "john wick",
  "transformers",
  "marvel"
];


function getMovies(query) {
  fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${query}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);

      moviesEl.innerHTML = "";

      
      if (data.Response !== "True") {
        moviesEl.innerHTML = "<p>No movies found</p>";
        return;
      }

      data.Search.forEach(movie => {
        const movieDiv = document.createElement("div");
        movieDiv.classList.add("movie");

        movieDiv.innerHTML = `
          <img src="${movie.Poster !== "N/A" ? movie.Poster : 'https://via.placeholder.com/300'}" />
          <h3>${movie.Title} (${movie.Year})</h3>
        `;

        
        movieDiv.addEventListener("click", () => {
          alert(movie.Title);
        });

        moviesEl.appendChild(movieDiv);
      });
    })
    .catch(err => {
      console.log(err);
      moviesEl.innerHTML = "<p>Error loading movies</p>";
    });
}


function loadRandomMovies() {
  const random =
    randomQueries[Math.floor(Math.random() * randomQueries.length)];

  getMovies(random);
}


loadRandomMovies();


searchInput.addEventListener("keyup", (e) => {
  const value = e.target.value.trim();

  if (value.length > 2) {
    getMovies(value);
  } else if (value.length === 0) {
    loadRandomMovies();
  }
});