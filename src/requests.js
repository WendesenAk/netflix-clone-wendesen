
const API_KEY = process.env.REACT_APP_API_KEY;

const requests = {
    netflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    trending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    topRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    nowPlaying: `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
    fetchAction: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHoror: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomance: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};
export default requests;