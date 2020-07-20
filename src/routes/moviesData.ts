import { Router, Request, Response } from 'express';
import axios from 'axios';
import { genreList } from '../genreList';
const router = Router();

//API key
const key: string = 'fee9133ff87c8385486979a559ff1687';

//filter criteria
const originalLanguage: string = 'de';

/******* year filer **********/
const year: string = '2005';

/******* genre filter ********/
//For example: 18,12 Drama & Adventure
//you can leave %2C at the end
let genres: string = '';

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
convert('Drama');

/******  API call to get movies ******/
router.get('/moviesData', async (req: Request, res: Response) => {
  const info = req.query.formData;
  console.log(info);
  console.log(typeof info);

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
