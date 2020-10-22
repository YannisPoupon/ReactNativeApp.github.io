const API_TOKEN = "4ffe014d49563dc03b21d5bfd5cc34d1";

export function getFilmsFromApiWithSearchedText (text, page) {
  const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text +'&page=' + page
  return fetch(url)
  .then((response) => response.json())
  .catch((error) => console.error(error))
}

export function getImageFromApi (path) {
  return "https://image.tmdb.org/t/p/w500" + path
}
