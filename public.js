
function scrollFunction() {
    var navigation = document.getElementsByClassName("navbar");
    var navigation_top = document.getElementsByClassName("navbar-top");


    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navigation[0].style.display = "block";
        navigation_top[0].style.display = "none";
    }
    
    else {
        navigation[0].style.display = "none";
        navigation_top[0].style.display = "block";


    }
}

window.onscroll = function () {
    scrollFunction();
};

function scrolltop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onload = function () {
    var navigation = document.getElementsByClassName("navbar");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navigation[0].style.display = "block";
    }

    else {
        navigation[0].style.display = "none";
    }
}


function burger() {
    var burger_stick = document.getElementsByClassName("burger");
    var ul_control = document.getElementsByClassName("ul-control");

    burger_stick[0].classList.toggle("open");
    ul_control[0].classList.toggle("show");
}

function nav() {
    var burger_stick = document.getElementsByClassName("burger");
    var ul_control = document.getElementsByClassName("ul-control");

    burger_stick[0].classList.remove("open");
    ul_control[0].classList.remove("show");

}