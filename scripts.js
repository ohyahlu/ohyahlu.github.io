document.addEventListener("DOMContentLoaded", function() {
    const popupContainer = document.getElementById('popup-container');
    const popupContent = document.getElementById('popup-content');
    const popupBody = document.getElementById('popup-body');
    const closePopup = document.getElementById('close-popup');

    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const content = getPopupContent(this.dataset.popup);
            popupBody.innerHTML = content;
            popupContainer.style.display = 'flex';
        });
    });

    closePopup.addEventListener('click', function() {
        popupContainer.style.display = 'none';
    });

    window.addEventListener('click', function(e) {
        if (e.target === popupContainer) {
            popupContainer.style.display = 'none';
        }
    });

    function getPopupContent(type) {
        switch(type) {
            case 'services':
                return 'This is the Services popup content.';
            case 'contact':
                return 'This is the Contact popup content.';
            case 'faq':
                return 'This is the FAQ popup content.';
            case 'seedia':
                return 'This is the Seedia popup content.';
            default:
                return '';
        }
    }
});
