const global = {
  currentPage: window.location.pathname
};

async function displayPopularMovies() {
  const results = await fetchAPIData('movie/popular');
  console.log(results);
}

// Fetch data from TMDB API
async function fetchAPIData(endpoint) {
  const API_KEY = 'cf0142b5cbc8938b61594d502443f4c4';
  const API_URL = 'https://api.themoviedb.org/3/';

  const response = await fetch(`${API_URL}${endpoint}?api_key=${API_KEY}&language=en-us`);

  const data = await response.json();

  return data;
}

// Highlight Active Link

function highlightActiveLink () {
  const links = document.querySelectorAll('.nav-link');
  links.forEach((link) => {
    if (link.getAttribute('href') === global.currentPage) {
      link.classList.add('active');
    }
  })
}

// Init App
function init() {
  switch (global.currentPage) {
    case '/':
    case '/index.html':
      displayPopularMovies();
      break;
    case '/shows.html':
      console.log('Shows');
      break;
    case '/movie-details.html':
      console.log('Movie Details');
      break;
    case '/tv-details.html':
      console.log('TV Details ');
      break;
    case '/search.html':
      console.log('Search');
      break;
  }
  highlightActiveLink();
}

document.addEventListener('DOMContentLoaded', init);