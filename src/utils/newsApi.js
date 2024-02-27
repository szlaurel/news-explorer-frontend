import { newsAPIkey } from "./constants";

class Api {
  constructor({ baseUrl, headers, newsApiKey }) {
    this._baseURL = baseUrl;
    this._headers = headers;
    this._newsApiKey = newsApiKey;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return new Promise.reject(`Error : ${res.status}`);
  }

  //   q is from the search form when the user types
  //   in the search bar

  getItems({ q, from, to, pageSize }) {
    return fetch(
      `https://nomoreparties.co/news/v2/everything?q=${q}&apiKey=${newsAPIkey}&from=${from}&to=${to}&pageSize=${pageSize}`,
      {
        method: "GET",
        headers: this._headers,
      }
    )
      .then(this._checkResponse)
      .then((data) => data);
  }
}

// needed to remove the brackets [] for the request to get sent VVV

// export const baseUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${newsAPIkey}`;

export const baseUrl = "https://localhost:3001/everything/";

export const api = new Api({
  baseUrl: baseUrl,
  headers: {
    "Content-Type": "application/json",
    Authorization: `${newsAPIkey}`,
  },
});

// console.log(baseUrl);

// old get method VVV

// getItems({ q, apiKey, from, to, pageSize }) {
//     return fetch(
//       `https://newsapi.org/v2/everything?q=${q}&apiKey=${apiKey}&from=${from}&to=${to}&pageSize=${pageSize}`,
//       {
//         method: "GET",
//         headers: this._headers,
//       }
//     )
//       .then(this._checkResponse)
//       .then((data) => data);
//   }
// }
