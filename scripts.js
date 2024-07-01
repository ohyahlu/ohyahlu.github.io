document.addEventListener("DOMContentLoaded", function() {
    const popupContainer = document.getElementById('popup-container');
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
                return '<p>Live Audio Engineering (providing PA & setup/teardown) - $100/hr</p>Live Audio Engineering (BYO-PA) - $75/hr</p>Lighting & Fog + $25/hr </p>Photography & Clips + $15/hr </p>Promotional Video + $500 </P>- For custom requests please contact via phone or email - ' ;
            case 'contact':
                return '<p>Phone: 512-800-3025 </p>Email: thesoundplugz@gmail.com</p>';
            case 'faq':
                return '<p>What equipment do you use?</p> We currently use a Behringer x32 with QSC speakers. </p>Can you use my equipment? </p> Yes we can! However, we recommend letting us provide the necessary equipment to mitigate any potential issues that are out of our control. of</p>Can I chose from any of the services how I like?</p> Yup! We encourage our clients to actively tailor our skills & services to their wants & needs. </p>';
            case 'about seedia':
                return '<p>Seedia consists of 2 indiviudals with industry-experience & proficieny in Audio engineering & Content creation. Our mission is to uplift the Austin music scene & provide Artists with every tool necessary to shine in todays age.</p> We know the game. </p>Seedia has big plans in the future to provide Artists with a platform & resources to accomplish their goals while maintaining entire-ownership & creative control.</p>Choosing Seedia is choosing art.</p>';
            default:
                return '';
        }
    }
});

