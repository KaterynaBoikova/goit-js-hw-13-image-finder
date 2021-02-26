import * as basicLightbox from 'basiclightbox'

function onImageClick(event){
  event.preventDefault();
  if(event.target.nodeName !=="IMG"){
    return;
  }

  let imgDiv = event.target.nextElementSibling;
  let imgLarge = imgDiv.firstElementChild;
  let cloned = imgLarge.cloneNode(true);

  const imageInstance = basicLightbox.create(imgDiv);
  imgDiv.appendChild(cloned);
  imageInstance.show()
};

  export default onImageClick;



