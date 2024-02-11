const API_DOMAIN = "https://gnews.io/api/v4/top-headlines?country=";
const API_SEARCH_DOMAIN = "https://gnews.io/api/v4/search?q=";
const API_KEY = "410f4ec82b4601d500f4c7fda21eff47";

export const endpointPath = (country, category) =>
  `${API_DOMAIN}${country}&lang=en&category=${category}&apikey=${API_KEY}`;

export const endpointSearch = (searchQuery) =>
  `${API_SEARCH_DOMAIN}${searchQuery}&lang=en&apikey=${API_KEY}`;

// Example usage:
const country = "us";
const category = "business";
const searchQuery = "technology";

const topHeadlinesEndpoint = endpointPath(country, category);
const searchEndpoint = endpointSearch(searchQuery);

console.log("Top Headlines Endpoint:", topHeadlinesEndpoint);
console.log("Search Endpoint:", searchEndpoint);
