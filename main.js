(function ($) {
    "use strict";

    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    $('.sidebar-toggler').click(function () {
        $('.sidebar, .content').toggleClass("open");
        return false;
    });
    
})(jQuery);

document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signupForm");
    const signinForm = document.getElementById("signinForm");

    if (signupForm) {
        signupForm.addEventListener("submit", function (e) {
            e.preventDefault(); 

            const username = document.getElementById("signupUsername").value;
            const email = document.getElementById("signupEmail").value;
            const password = document.getElementById("signupPassword").value;

            const userData = { username, email, password };
            localStorage.setItem("user", JSON.stringify(userData));

           
            alert("Account created successfully! You will be redirected to Sign In.");
            window.location.href = "signin.html"; 
        });
    }


    if (signinForm) {
        signinForm.addEventListener("submit", function (e) {
            e.preventDefault(); 

            const email = document.getElementById("signinEmail").value;
            const password = document.getElementById("signinPassword").value;

            const savedUser = JSON.parse(localStorage.getItem("user"));

            if (savedUser && savedUser.email === email && savedUser.password === password) {
                window.location.href = "index.html"; 
            } else {
                alert("Invalid credentials! Please try again.");
            }
        });
    }
});
