document.addEventListener('DOMContentLoaded', () => {
    const showImageBtn = document.getElementById('showImageBtn');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('closeBtn');

    showImageBtn.addEventListener('click', () => {
        overlay.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
        overlay.classList.remove('active');
    });

    // Close the popup if clicking outside of the popup
    overlay.addEventListener('click', (event) => {
        if (event.target === overlay) {
            overlay.classList.remove('active');
        }
    });
});
