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

//converting genres strings to genres string acceptable for the API call
function convert(...args: any): any {
  let genres = '';
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

    //calculate year range
    const yearsArray: string[] = [];

    let from = parseInt(fromYear);
    const to = parseInt(toYear);

    //recursive
    const addYears = () => {
      if (from == to) {
        yearsArray.push(to.toString());
        return;
      } else {
        yearsArray.push(from.toString());
        from = from + 1;
        addYears();
      }
    };
    addYears();

    const moviesDataArray = [];

    for (let i = 0; i < yearsArray.length; i++) {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=${yearsArray[i]}&with_genres=${genreCodes}&with_original_language=${language}`
      );
      const moviesData = response.data;
      const results = moviesData.results;
      for (const key in results) {
        moviesDataArray.push(results[key]);
      }
    }
    console.log(genreCodes);
    res.send(moviesDataArray);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

export { router };
