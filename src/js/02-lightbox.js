import { galleryItems } from './gallery-items.js';
// Change code below this line
const imagePaletteContainer = document.querySelector('.gallery');
const imagesMarkup = createImagesMarkup(galleryItems);

imagePaletteContainer.insertAdjacentHTML('beforeend', imagesMarkup);
imagePaletteContainer.addEventListener('click', onImagePaletteContainerClick);

function createImagesMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join('');
}

function onImagePaletteContainerClick(evt) {
  evt.preventDefault();
  const gallerySwatch = evt.target.classList.contains('gallery__image');
  if (!gallerySwatch) {
    return;
  }

  document.addEventListener('keydown', logKey);

  function logKey(e) {
    if (e.code === 'Escape') {
      instance.close();
    }
  }
}

// console.log(galleryItems);
var lightbox = new SimpleLightbox('.gallery a', {
  /* options */
  captionsData: 'alt',
  captionDelay: 250,
});
