let image = document.querySelectorAll('.image-container img');
let close = document.querySelector('.popup-image span');

image.forEach(images => {
  images.addEventListener('click', () => {
    document.querySelector('.popup-image').style.display = 'block';
    document.querySelector('.popup-image img').src = images.getAttribute('src');
  })

  close.addEventListener('click', () => {
    document.querySelector('.popup-image').style.display = 'none';
  })

})