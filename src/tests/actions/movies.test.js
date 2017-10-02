import { fetchMovies } from '../../actions/movies'

test('should setup receive movies action object', (done) => {
  const dispatch = jest.fn()
  fetchMovies('director', 'James%20Cameron')(dispatch)
    .then(() => {
      expect(dispatch).toBeCalledWith({
        type: 'RECEIVE_MOVIES',
        movies: testingQuery
      })
    done()
  })
})

const testingQuery = [
  {
    "unit": 352,
    "show_id": 1181461,
    "show_title": "Titanic",
    "release_year": "1997",
    "rating": "3.9",
    "category": "Dramas",
    "show_cast": "Leonardo DiCaprio, Kate Winslet, Billy Zane, Kathy Bates, Frances Fisher, Gloria Stuart, Bill Paxton, Bernard Hill, David Warner, Victor Garber",
    "director": "James Cameron",
    "summary": "This cinematic spectacle -- winner of 11 Oscars -- follows society girl Rose and penniless artist Jack as they fall in love just as tragedy strikes.",
    "poster": "http://netflixroulette.net/api/posters/1181461.jpg",
    "mediatype": 0,
    "runtime": "194 min"
  },
  {
    "unit": 380,
    "show_id": 1032625,
    "show_title": "The Terminator",
    "release_year": "1984",
    "rating": "3.9",
    "category": "Action & Adventure",
    "show_cast": "Arnold Schwarzenegger, Michael Biehn, Linda Hamilton, Paul Winfield, Lance Henriksen, Rick Rossovich, Bess Motta, Earl Boen, Dick Miller, Shawn Schepps",
    "director": "James Cameron",
    "summary": "In the post-apocalyptic future, tyrannical machines teleport a cyborg to 1984 to a kill a woman whose unborn son is destined to lead the human rebels.",
    "poster": "http://netflixroulette.net/api/posters/1032625.jpg",
    "mediatype": 0,
    "runtime": "107 min"
  },
  {
    "unit": 1001,
    "show_id": 60028202,
    "show_title": "Terminator 2: Judgment Day",
    "release_year": "1991",
    "rating": "3.9",
    "category": "Action & Adventure",
    "show_cast": "Arnold Schwarzenegger, Linda Hamilton, Robert Patrick, Edward Furlong, Earl Boen, Joe Morton, S. Epatha Merkerson, Castulo Guerra, Danny Cooksey, Jenette Goldstein",
    "director": "James Cameron",
    "summary": "A reprogrammed Terminator arrives from the future to protect young John Connor from a relentless shape-shifting cyborg in this sequel to Terminator. On the run, John and his guardian seek John's mother, Sarah, who is locked away in an insane asylum.",
    "poster": "http://netflixroulette.net/api/posters/60028202.jpg",
    "mediatype": 0,
    "runtime": "137 min"
  }
]