// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import Simplelightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
  galleryContainer: document.querySelector(`.gallery`),
  galleryMarkup: createGalleryMarkup(galleryItems),
};

refs.galleryContainer.insertAdjacentHTML(`afterbegin`, refs.galleryMarkup);

refs.galleryContainer.addEventListener(`click`, onImgGalleryClick);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li style="list-style: none">
        <a class="gallery__item" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
        />
      </a>
      </li>`;
    })
    .join(' ');
}
function onImgGalleryClick(evt) {
  evt.preventDefault();

  const isElClick = evt.target.classList.contains(`gallery__image`);
  if (!isElClick) {
    return;
  }
  //   const parent = evt.target.closest(`a`);
}

const lightbox = new Simplelightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  scrollZoom: false,
});
