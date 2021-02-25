const apiKey = '20421486-46bc168b805336e39571b1f9b';


export default {
  searchQuery: '',
  page: 1,
  fetchImages(searchQuery, page=1) {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${apiKey}`;
    return fetch(url)
    .then(response=>response.json())
    .then(({hits}) => {
    this.page +=1;
    return hits;
})
},
  resetPage(){
    this.page = 1;
  },
  set query(value){ this.searchQuery = value},
};
