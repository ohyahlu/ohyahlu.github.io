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

    // Handle both click and touch events
    const clickHandler = function(e) {
        if (!popupContainer.contains(e.target)) {
            popupContainer.style.display = 'none';
            // Remove the event listeners after hiding the popup
            document.removeEventListener('click', clickHandler);
            document.removeEventListener('touchstart', clickHandler);
        }
    };

    // Listen for both click and touch events on the document
    document.addEventListener('click', clickHandler);
    document.addEventListener('touchstart', clickHandler);

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

