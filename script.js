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

    var closeButton = document.getElementById("close-button");

    closeButton.addEventListener('click', function (event) {
        event.preventDefault();
        var contactBox = document.getElementById('contact-box');
        contactBox.style.display = 'none';
    });

    var myName = document.getElementById('nombre-link');
    myName.addEventListener('click', function (event) {
        event.preventDefault();
        var myPictureBox = document.getElementById('my-picture-box');
        if (myPictureBox.style.display === 'block') {
            myPictureBox.style.display = 'none';
            // Hide the box if it's already visible
        } else {
            myPictureBox.style.display = 'block'; // Show the box if it's hidden
        }
    });

    var closeButton2 = document.getElementById("close-button2");

    closeButton2.addEventListener('click', function (event) {
        event.preventDefault();
        var myPictureBox = document.getElementById('my-picture-box');
        myPictureBox.style.display = 'none';
    });



});