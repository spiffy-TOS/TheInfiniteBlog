function openModal(src) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  modal.style.display = "block";
  modalImg.src = src;
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}

document.addEventListener('keydown', function (event) {
  if (event.key === "Escape") closeModal();
});

window.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.gallery-grid img');
  images.forEach(img => {
    img.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(img.src);
    });
  });
});

