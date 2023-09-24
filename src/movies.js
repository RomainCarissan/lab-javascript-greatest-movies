// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let directors = moviesArray.map((movies) => movies.director);
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let SpielbergDrama = moviesArray.filter(
    (movies) =>
      movies.director === "Steven Spielberg" && movies.genre.includes("Drama")
  );

  return SpielbergDrama.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  let totalScore = 0;
  let validMovieCount = 0;

  moviesArray.forEach((movie) => {
    if (typeof movie.score === "number" && !isNaN(movie.score)) {
      totalScore += movie.score;
      validMovieCount++;
    }
  });

  if (validMovieCount === 0) {
    return 0;
  }

  const averageScore = totalScore / validMovieCount;
  return parseFloat(averageScore.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let allDrama = moviesArray.filter((movies) => movies.genre.includes("Drama"));
  if (allDrama.length === 0) {
    return 0;
  }

  let dramaScores = allDrama.reduce((acc, movies) => acc + movies.score, 0);
  let averageDrama = Number((dramaScores / allDrama.length).toFixed(2));

  return averageDrama;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const sortedMovies = [...moviesArray];

  sortedMovies.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title, undefined, { sensitivity: "base" });
    }
    return a.year - b.year;
  });

  return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(moviesArray) {
  const sortedMovies = [...moviesArray];

  sortedMovies.sort((a, b) => {
    return a.title.localeCompare(b.title, undefined, { sensitivity: "base" });
  });

  const first20Titles = sortedMovies.slice(0, 20).map((movie) => movie.title);

  return first20Titles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
