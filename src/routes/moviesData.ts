import { Router, Request, Response } from 'express';
import axios from 'axios';
const router = Router();

//API key
const key: string = 'fee9133ff87c8385486979a559ff1687';

//Genre List
const genreList: genreListInterface[] = [
  {
    id: 28,
    name: 'Action',
  },
  {
    id: 12,
    name: 'Adventure',
  },
  {
    id: 16,
    name: 'Animation',
  },
  {
    id: 35,
    name: 'Comedy',
  },
  {
    id: 80,
    name: 'Crime',
  },
  {
    id: 99,
    name: 'Documentary',
  },
  {
    id: 18,
    name: 'Drama',
  },
  {
    id: 10751,
    name: 'Family',
  },
  {
    id: 14,
    name: 'Fantasy',
  },
  {
    id: 36,
    name: 'History',
  },
  {
    id: 27,
    name: 'Horror',
  },
  {
    id: 10402,
    name: 'Music',
  },
  {
    id: 9648,
    name: 'Mystery',
  },
  {
    id: 10749,
    name: 'Romance',
  },
  {
    id: 878,
    name: 'Science Fiction',
  },
  {
    id: 10770,
    name: 'TV Movie',
  },
  {
    id: 53,
    name: 'Thriller',
  },
  {
    id: 10752,
    name: 'War',
  },
  {
    id: 37,
    name: 'Western',
  },
];

//filter criteria
const originalLanguage: string = 'de';
const year: string = '2018';
let genres: string = ''; //for example, 18,12 drama & adventure -
//you can leave %2C at the end

//converting genres strings to genres string acceptable for the API call
function convert(...args: string[]) {
  for (let e of args) {
    for (let f of genreList) {
      if (e === f.name) {
        e = f.id.toString();
        genres += e + '%2C';
      }
    }
  }
  return genres;
}

//calling function with sample genres for API call
convert('Drama', 'Adventure');

//interface
interface genreListInterface {
  id: number;
  name: string;
}

//filter - external API call
router.get('/moviesData', async (req: Request, res: Response) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=${year}&with_genres=${genres}&with_original_language=${originalLanguage}`
    );
    const moviesData = response.data;
    res.send(moviesData);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

export { router };
