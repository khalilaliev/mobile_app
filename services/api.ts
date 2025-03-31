export const TMDB_CONFIG = {
  BASE_URL: "https://api.themoviedb.org/3/",
  API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
  },
};

export const fetchMovies async ({query}: {query: string}) => {
  const endpoint = query 
  ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}` 
  : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`

  const response = await fetch(endpoint, {
    method: "GET",
    headers: TMDB_CONFIG.headers
  })

  if(!response.ok) {
    // @ts-ignore
    throw new Error('Failed to fetch Movies', response.statusText)
  }

  const data = await response.json()

  return data
}

// const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODM4YzQyNDE4Yzk1MzVlMWJjYjgzYTdmZmRhNjAyNCIsIm5iZiI6MTc0MzQyNDA3Ny44NjgsInN1YiI6IjY3ZWE4YTRkNTA0MGE3NWI0YWU1NzcxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aOl19LAyPxGZJKfN40HyhJmukD4MRpdc6HH8JinX7YY'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));
