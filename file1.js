

document.getElementById("wrapper").onscroll = function() {myFunction()};

function myFunction() {
    var whiteNav = document.getElementById("header__top-white");
    whiteNav.style.top = "-8.4rem";
    var y  = document.getElementById("wrapper").scrollTop;
    if(y !== 0) {
        whiteNav.style.top = "0rem";
    }
    else {
        whiteNav.style.top = "-8.4rem";
    }
}