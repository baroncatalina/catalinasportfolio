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
    console.log("problem?")

    document.addEventListener('DOMContentLoaded', function () {
        var closeIcon = document.querySelector('.close-button');
        var contactBox = document.getElementById('contact-box');

        closeIcon.addEventListener('click', function () {
            contactBox.style.display = 'none'; // Oculta el box al hacer clic en la cruz
        });
    });
    console.log("problem???")
});