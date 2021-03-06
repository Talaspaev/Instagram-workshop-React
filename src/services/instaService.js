/* eslint-disable no-return-await */
/* eslint-disable no-underscore-dangle */
export default class instaService {
  constructor() {
    this._apiBase = 'http://localhost:3000';
  }

    getResource = async (url) => {
      const res = await fetch(`${this._apiBase}${url}`);
      if (!res.ok) {
        throw new Error(`Could not fetch ${url}:recived ${res.status}`);
      }

      return await res.json();
    }

    getAllPosts = async () => {
      const res = await this.getResource('/posts/');
      return res;
    }
}
