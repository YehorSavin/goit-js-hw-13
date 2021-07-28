export default class ApiService {
  constructor() {
    this.BASE_URL = 'https://pixabay.com/api/';
    this.page = 1;
    this.searchQuery = '';
    this.key = '21692958-f8cd542283124fe4ad278ec7e';
  }

  fetchItems() {
    const url = `${this.BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${this.key}`;
    return fetch(url).then(res => res.json());
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
}
