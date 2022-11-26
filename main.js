const imageUrls = ['https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg',
  'https://c.tenor.com/uYP_Nkq8VPsAAAAd/coding-hello-world.gif',
  'https://wiki.godvillegame.com/images/thumb/7/76/Prap.jpg/298px-Prap.jpg'];
const $gallery = document.querySelector('main');
const $imageURLInput = document.querySelector('input');
const $addImageButton = document.querySelector('button');

$addImageButton.addEventListener('click', function () {
  if ($imageURLInput.value !== '') {
    imageUrls.push($imageURLInput.value);
    $imageURLInput.value = '';
    updateGallery();
  }
});

function updateGallery() {
  $gallery.innerHTML = '';
  for (let i = 0; i < imageUrls.length; i++) {
    const $imageElement = document.createElement('img');
    $imageElement.className = 'gallery-image';
    $imageElement.src = imageUrls[i];
    $gallery.appendChild($imageElement);
  }
}

updateGallery();
