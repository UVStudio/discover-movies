import { Router, Request, Response } from 'express';
import axios from 'axios';
import { genreList } from '../genreList';
const router = Router();

type movieFilter = {
  fromYear: string;
  toYear: string;
  language: string;
  genres: string[];
};

//API key
const key: string = 'fee9133ff87c8385486979a559ff1687';

let genres = '';
//converting genres strings to genres string acceptable for the API call
function convert(...args: any): any {
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

/******  API call to get movies ******/
router.get('/moviesData', async (req: Request, res: Response) => {
  const info: any = req.query.formData;

  try {
    const infoObj: movieFilter = JSON.parse(info);
    const { fromYear, toYear, language, genres } = infoObj;

    const genreCodes = convert(...genres);
    console.log(genreCodes);

    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=${fromYear}&with_genres=${genreCodes}&with_original_language=${language}`
    );
    const moviesData = response.data;
    res.send(moviesData);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

export { router };
