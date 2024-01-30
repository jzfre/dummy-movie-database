export interface TMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

const OMDB_BASE_URL = 'https://www.omdbapi.com';

export const buildOMDBApiSearchByString = (title: string, page: number) => {
  return `${OMDB_BASE_URL}/?s=${title}&apikey=${process.env.VITE_OMDB_API_KEY}&page=${page} `;
};

export const buildOMDBApiSearchById = (id: string) => {
  return `${OMDB_BASE_URL}/?i=${id}&apikey=${process.env.VITE_OMDB_API_KEY}`;
};
