document.addEventListener('DOMContentLoaded', function () {

    var contactLink = document.getElementById('contact-link');

    contactLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default link behavior
        var contactBox = document.getElementById('contact-box');
        if (contactBox.style.display === 'block') {
            contactBox.style.display = 'none';
            // Hide the box if it's already visible
        } else {
            contactBox.style.display = 'block'; // Show the box if it's hidden
        }
    });

});