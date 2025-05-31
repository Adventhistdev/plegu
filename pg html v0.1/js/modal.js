document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close-modal');
    const collageImages = document.querySelectorAll('.collage-img');

    function openModal(imgSrc) {
        modal.style.display = 'block';
        modalImg.src = imgSrc;
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    collageImages.forEach(img => {
        img.addEventListener('click', function() {
            openModal(this.src);
        });
    });

    closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
});