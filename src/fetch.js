let fetchData = (url) => {
const getJson = response => {
  return response.ok ? response.json() : Promise.reject(response);
};
return fetch(url).then(getJson);
}

export default fetchData;