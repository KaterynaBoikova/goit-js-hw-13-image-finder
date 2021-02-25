import './css/styles.css';
import apiService from './js/apiService';
import updateImageMarkup from './js/update_image_markup';
import refs from './js/refs';



refs.formRef.addEventListener('submit', event =>{
  event.preventDefault();
  const form = event.currentTarget;
  apiService.query = form.elements.query.value;
  refs.ulRef.innerHTML = '';
  form.reset();
  apiService.resetPage();

  refs.buttonRef.classList.add('is-hidden');

  apiService.fetchImages()
    .then(updateImageMarkup);
  refs.buttonRef.classList.remove('is-hidden');

});

refs.buttonRef.addEventListener('click', ()=>{
  apiService.fetchImages()
    .then((hits)=>{updateImageMarkup(hits);
      window.scrollTo({
        top: document.documentElement.offsetHeight,
        behavior: 'smooth'
      });
    });
  });
