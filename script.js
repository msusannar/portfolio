// JavaScript placeholder
console.log("Interactive features loaded.");

document.querySelectorAll('[data-gallery]').forEach(gallery => {
  const images = gallery.querySelectorAll('img');
  const prevBtn = gallery.querySelector('.prev');
  const nextBtn = gallery.querySelector('.next');
  let current = 0;

  const showImage = index => {
    images.forEach((img, i) => {
      img.classList.toggle('active', i === index);
    });
  };

  prevBtn.addEventListener('click', () => {
    current = (current - 1 + images.length) % images.length;
    showImage(current);
  });

  nextBtn.addEventListener('click', () => {
    current = (current + 1) % images.length;
    showImage(current);
  });

  showImage(current);
});
