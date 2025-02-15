const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MmJlMjZjY2YxMjE0M2NmYWVhZjU5Yjk4NDQzNWRmMiIsInN1YiI6IjY0ZjQ4NGVjM2Q0M2UwMDExYjFjMjI2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pLs3ad6dkAU94TIRcw_uYW-JRgWAAnY1By-8v3M8JHo";

export const OPTIONS =  {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: process.env.REACT_APP_TMDB_AUTH
    }
  };

export const TRENDING_MOVIES_API_URL = "https://api.themoviedb.org/3/movie/now_playing?page=1"

export const TREDNING_MOVIES_TRAILER_START ="https://api.themoviedb.org/3/movie/";
export const TREDNING_MOVIES_TRAILER_END = "/videos?language=en-US";
export const POSTER_URL = "https://image.tmdb.org/t/p/original"

export const POPULAR_MOVIES = "https://api.themoviedb.org/3/movie/top_rated?original_language=hi&page=1"

export const UPCOMMING_MOVIES = "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";

export const AIRING_TODAY = "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1";

export const POPULAR_TV_SHOW ="https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1";