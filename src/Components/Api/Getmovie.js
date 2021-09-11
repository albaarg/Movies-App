const API = "https://api.themoviedb.org/3";

export const get = async (path) => {
  return await fetch(API + path, {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YjMxYzUyNGE5YzhjYzgwNGZiM2QzY2YwNDBhZDk2MiIsInN1YiI6IjYxMTcwMDZlMzUwMzk4MDA3Mjg0ZDhjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C2EHALTdDJwDHwsD0F34sKv-S97yBkKhtl4nLbCfIMg",
      "Content-Type": "application/json;charset=utf-8",
    },
  })
    .then((result) => result.json())
    .then((data) => {
      return data;
    });
};
