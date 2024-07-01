document.addEventListener("DOMContentLoaded", function() {
    const popupContainer = document.getElementById('popup-container');
    const popupBody = document.getElementById('popup-body');
    const closePopup = document.getElementById('close-popup');

    // Function to open popup
    function openPopup(type) {
        const content = getPopupContent(type);
        popupBody.innerHTML = content;
        popupContainer.style.display = 'flex';

        // Add event listener to close popup when clicking outside
        document.addEventListener('click', clickOutsideHandler);
    }

    // Function to close popup
    function closePopupFunction() {
        popupContainer.style.display = 'none';
        // Remove event listener when closing popup
        document.removeEventListener('click', clickOutsideHandler);
    }

    // Event listener for each menu item
    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const type = this.dataset.popup;
            openPopup(type);
        });
    });

    // Event listener for close button
    closePopup.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevents the click from bubbling to the document
        closePopupFunction();
    });

    // Function to handle click outside popup
    const clickOutsideHandler = function(e) {
        if (!popupContainer.contains(e.target) && e.target !== closePopup) {
            closePopupFunction();
        }
    };

    function getPopupContent(type) {
        switch(type) {
            case 'services':
                return '<p>Live Audio Engineering (providing PA & setup/teardown) - $100/hr</p><p>Live Audio Engineering (BYO-PA) - $75/hr</p><p>Lighting & Fog + $25/hr </p><p>Photography & Clips + $15/hr </p><p>Promotional Video + $500 </p><p>- For custom requests please contact via phone or email - </p>';
            case 'contact':
                return '<p>Phone: 512-800-3025 </p><p>Email: thesoundplugz@gmail.com</p>';
            case 'faq':
                return '<p>What equipment do you use?</p><p>We currently use a Behringer x32 with QSC speakers. </p><p>Can you use my equipment?</p><p>Yes we can! However, we recommend letting us provide the necessary equipment to mitigate any potential issues that are out of our control. </p><p>Can I choose from any of the services how I like?</p><p>Yup! We encourage our clients to actively tailor our skills & services to their wants & needs.</p>';
            case 'about-seedia':
                return '<p>Seedia consists of 2 individuals with industry experience & proficiency in Audio engineering & Content creation. Our mission is to uplift the Austin music scene & provide Artists with every tool necessary to shine in today\'s age.</p><p>We know the game. </p><p>Seedia has big plans in the future to provide Artists with a platform & resources to accomplish their goals while maintaining entire ownership & creative control.</p><p>Choosing Seedia is choosing art.</p>';
            default:
                return '';
        }
    }
});
