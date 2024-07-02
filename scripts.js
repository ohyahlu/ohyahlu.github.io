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
                return '<p><strong>Live Audio Engineering</strong> - <strong>$100/hr </strong>(Providing PA & setup/teardown)</p><strong>Live Audio Engineering</strong> - <strong>$75/hr</strong> (BYO-PA)</p><em>Add ons: </em></p><strong>Lighting & Fog + $25/hr</strong> </p><strong>Photography & Clips + $15/hr </strong></p><strong>Promotional Video + $500</strong> </P><em>- For custom requests please contact via <a href="tel:512-800-3025">phone</a> or <a href="mailto:thesoundplugz@gmail.com">email</a> -</em>';
            case 'contact':
                return '<p><strong>Phone:</strong> <a href="tel:512-800-3025">512-800-3025</a></p> </p><strong>Email:</strong> <a href="mailto:thesoundplugz@gmail.com">thesoundplugz@gmail.com</a></p>';
            case 'faq':
                return '<p><strong>What equipment do you use?</strong></p> We currently use a Behringer x32 with QSC speakers. </p><strong>Can you use my equipment?</strong> </p> Yes we can! However, we recommend letting us provide the necessary equipment to mitigate any potential issues that are out of our control. of</p><strong>Can I chose from any of the services how I like?</strong></p> Yes! We encourage our clients to actively tailor our skills & services to their wants & needs. </p>';
            case 'about seedia':
                return '<p><strong>Seedia</strong> consists of 2 indiviudals with industry-experience & proficieny in Audio engineering & Content creation. Our mission is to uplift the Austin music scene & provide Artists with every tool necessary to shine in todays age.</p><em> We know the game. </em></p><strong>Seedia</strong> has big plans in the future to provide Artists with a platform & resources to accomplish their goals while maintaining entire-ownership & creative control.</p>Choosing <strong>Seedia</strong> is choosing <em>art</em>.</p>';
            default:
                return '';
        }
    }
});

