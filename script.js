document.addEventListener('DOMContentLoaded', function () {
    const popUpBox1 = document.querySelector('.popup-box');
    const popUpBox2 = document.querySelector('.popup-box2');
    const contactButton = document.querySelector('#contact-link');
    const nameButton = document.querySelector('#nombre-link');
    const closeButtons = document.querySelectorAll('.close-button');
    const overlay = document.querySelector('.overlay');

    const openContactPopUp = function () {
        popUpBox1.classList.remove('hidden'),
            overlay.classList.remove('hidden')
    };
    const openNamePopUp = function () {
        popUpBox2.classList.remove('hidden'),
            overlay.classList.remove('hidden')
    };

    contactButton.addEventListener('click', openContactPopUp);
    nameButton.addEventListener('click', openNamePopUp);

    const closePopUp1 = function () {
        popUpBox1.classList.add('hidden'),
            overlay.classList.add('hidden')
    };

    const closePopUp2 = function () {
        popUpBox2.classList.add('hidden'),
            overlay.classList.add('hidden')
    };

    for (i = 0; i < closeButtons.length; i++) {
        closeButtons[0].addEventListener('click', closePopUp1),
            closeButtons[1].addEventListener('click', closePopUp2)
    };

    if (popUpBox1.classList.contains('hidden')) {
        overlay.addEventListener('click', closePopUp1)
    }

    if (popUpBox2.classList.contains('hidden')) {
        overlay.addEventListener('click', closePopUp2)
    }

    document.addEventListener('keydown', function (e) {
        // console.log(e.key);

        if (e.key === 'Escape' && !popUpBox1.classList.contains('hidden')) {
            closePopUp1();
        }
    });
    document.addEventListener('keydown', function (e) {
        // console.log(e.key);

        if (e.key === 'Escape' && !popUpBox2.classList.contains('hidden')) {
            closePopUp2();
        }
    });

    $(document).ready(function () {
        $(".fancybox").fancybox({
            buttons: [
                "thumbs",
                "fullscreen",
                "close"
            ],

        });
    });

});



