javascript
/* =========================================================
   THASII (PTY) LTD
   WEBSITE JAVASCRIPT
========================================================= */


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");


menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("show");

});


/* Close menu when a navigation link is clicked */

document
    .querySelectorAll(".nav-links a")
    .forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("show");

        });

    });



/* =========================================================
  /* HERO SLIDESHOW
========================================================= */

const slides =
    document.querySelectorAll(".slide");

const controls =
    document.getElementById("sliderControls");

let currentSlide = 0;


/* Create slideshow buttons */

slides.forEach(function (slide, index) {

    const dot =
        document.createElement("button");

    dot.classList.add("slider-dot");


    if (index === 0) {

        dot.classList.add("active");

    }


    dot.addEventListener("click", function () {

        showSlide(index);

    });


    controls.appendChild(dot);

});


const dots =
    document.querySelectorAll(".slider-dot");


/* Show selected slide */

function showSlide(index) {

    slides.forEach(function (slide) {

        slide.classList.remove("active");

    });


    slides[index]
        .classList.add("active");



    currentSlide = index;

}


/* Automatic slideshow */

setInterval(function () {

    currentSlide++;

    if (currentSlide >= slides.length) {

        currentSlide = 0;

    }

    showSlide(currentSlide);

}, 5000);



/* =========================================================
   PROJECT GALLERY FILTER
========================================================= */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const projects =
    document.querySelectorAll(".project-card");


filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {


        /* Remove active class */

        filterButtons.forEach(function (btn) {

            btn.classList.remove("active");

        });


        /* Activate selected button */

        button.classList.add("active");


        /* Get category */

        const filter =
            button.getAttribute("data-filter");


        /* Filter projects */

        projects.forEach(function (project) {

            const category =
                project.getAttribute("data-category");


            if (
                filter === "all" ||
                category === filter
            ) {

                project.style.display = "block";

            } else {

                project.style.display = "none";

            }

        });

    });

});



/* =========================================================
   QUOTATION FORM
========================================================= */

const quoteForm =
    document.getElementById("quoteForm");

const formMessage =
    document.getElementById("formMessage");


quoteForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        /*
        -----------------------------------------------------
        DEMO FORM

        This currently shows a confirmation message.

        For the live website, connect this form to:

        • Email
        • Database
        • CRM
        • WhatsApp
        • Backend API

        -----------------------------------------------------
        */


        formMessage.style.display = "block";


        quoteForm.reset();


        setTimeout(function () {

            formMessage.style.display = "none";

        }, 7000);

    }
);



/* =========================================================
   CURRENT YEAR
========================================================= */

const year =
    document.getElementById("year");


year.textContent =
    new Date().getFullYear();



/* =========================================================
   SCROLL REVEAL ANIMATION
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".service-card, .project-card, .contact-card"
    );


const observer =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(function (element) {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(20px)";

    element.style.transition =
        "opacity .6s ease, transform .6s ease";

    observer.observe(element);

});



/* =========================================================
   SMOOTH HEADER EFFECT
========================================================= */

window.addEventListener("scroll", function () {

    const navbar =
        document.querySelector(".navbar");


    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 5px 25px rgba(0,0,0,.08)";

    } else {

        navbar.style.boxShadow = "none";

    }

});
