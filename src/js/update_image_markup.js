import markupTemplate from '../templates/imageCardTemplate.hbs';
import refs from './refs';

function updateImageMarkup(hits){
  const markup = markupTemplate(hits);
  refs.ulRef.insertAdjacentHTML('beforeend', markup);
};

export default updateImageMarkup;
