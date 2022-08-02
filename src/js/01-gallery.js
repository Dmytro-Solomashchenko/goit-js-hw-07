import { galleryItems } from './gallery-items.js';
// Change code below this line

const imagePaletteContainer = document.querySelector('.gallery');
const imagesMarkup = createImagesMarkup(galleryItems);

imagePaletteContainer.insertAdjacentHTML('beforeend', imagesMarkup);
imagePaletteContainer.addEventListener('click', onImagePaletteContainerClick);

function createImagesMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join('');
}

function onImagePaletteContainerClick(evt) {
  evt.preventDefault();
  const gallerySwatch = evt.target.classList.contains('gallery__image');
  if (!gallerySwatch) {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`);

  instance.show();

  //   instance.show(() => console.log('lightbox now visible'));
  document.addEventListener('keydown', logKey);

  function logKey(e) {
    if (e.code === 'Escape') {
      instance.close();
    }
  }
}

// console.log(galleryItems);
