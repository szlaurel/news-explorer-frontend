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
      `${this._baseURL}/everything?q=${q}&apiKey=${newsAPIkey}&from=${from}&to=${to}&pageSize=${pageSize}`,
      {
        method: "GET",
        headers: this._headers,
      }
    )
      .then(this._checkResponse)
      .then((data) => data);
  }

  addCardLike() {
    return fetch("https://nomoreparties.co/articles", {
      method: "POST",
      headers: this._headers,
    })
      .then(this._checkResponse)
      .then((data) => data);
  }

  removeCardLike() {
    return fetch("https://nomoreparties.co/articles", {
      method: "DELETE",
      headers: this._headers,
    })
      .then(this._checkResponse)
      .then((data) => data);
  }
}

/* -------------------------------------------------------------------------- */
/*                             some basic comments                            */
/* -------------------------------------------------------------------------- */

// needed to remove the brackets [] for the request to get sent VVV

/* -------------------------------------------------------------------------- */
/*                                   exports                                  */
/* -------------------------------------------------------------------------- */

export const baseUrl = "https://nomoreparties.co/news/v2";

export const api = new Api({
  baseUrl: baseUrl,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${newsAPIkey}`,
  },
});
