const ROOT_URL = "http://yoshi.willandskill.eu:8999/api/v1/";
const LOGIN_URL = `${ROOT_URL}auth/api-token-auth/`;

const EVENT_LIST_URL = `${ROOT_URL}events/events/`;

/*
const eventMainPageUrl = `${ROOT_URL}cms/${currentSlug}/main-page/`;

login
fetchEventList
fetchEventMainPage
*/

export default class {
  async login(email, password) {
    const payload = {
      email,
      password,
    };
    return fetch(LOGIN_URL, {
      method: "POST",
      headers: this.getPublicHeaders(),
      body: JSON.stringify(payload),
    });
  }

  async fetchEventList() {
    return fetch(EVENT_LIST_URL, {
      headers: this.getPrivateHeaders(),
    });
  }

  async fetchEventMainPage(eventSlug) {
    const url = `${ROOT_URL}cms/${eventSlug}/main-page/`;
    return fetch(url, {
      headers: this.getPrivateHeaders(),
    });
  }

  setToken(token) {
    localStorage.setItem("EVENT_APP_TOKEN", token);
  }
  getToken() {
    return localStorage.getItem("EVENT_APP_TOKEN");
  }
  getPrivateHeaders() {
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.getToken()}`,
    };
  }

  getPublicHeaders() {
    return {
      "Content-Type": "application/json",
    };
  }
}
