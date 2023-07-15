import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3"
const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=211d78b9a9a4128398f23a239dc400ef';
const api_Key = "211d78b9a9a4128398f23a239dc400ef"

const getTrendingVideos = axios.get(movieBaseUrl+"/trending/all/day?api_key="+api_Key)

const getMovieByGenreId = (id) => axios.get(movieByGenreBaseURL+"&with_genres="+id)



export default {getTrendingVideos, getMovieByGenreId}


