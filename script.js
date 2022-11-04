// AUTHOR - RAVINDU ARATCHIGE
// https://github.com/ravi-aratchige

// removes the cookie bar and overlay when user accepts or declines cookies

function hideCookieBar() {
    document.querySelector('.overlay').style.display = 'none';
    document.querySelector('.cookieBar').style.display = 'none';
}

// adjusting height of right side based on height of left side to ensure responsivity at desktop level

let leftSideHeight = document.querySelector('.leftSide').clientHeight;
let rightSideHeight = document.querySelector('.rightSide').clientHeight;

if (leftSideHeight > rightSideHeight) {
    rightSideHeight = leftSideHeight + 'px';
} else {
    leftSideHeight = rightSideHeight + 'px';
}

// preventing user from scrolling when cookie bar is visible

function preventScroll(e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
}

function disableScroll() {
    document.querySelector('.overlay').addEventListener('wheel', preventScroll);
}

function enableScroll() {
    document.querySelector('.overlay').removeEventListener('wheel', preventScroll);
}

disableScroll();    // disabling scroll when website loads

document.querySelector('.accept').addEventListener('click', enableScroll);
document.querySelector('.decline').addEventListener('click', enableScroll);

// hide and unhide scroll bar as necessary

function hideScrollBar() {
    document.body.style.overflow = 'hidden';
}

function unhideScrollBar() {
    document.body.style.overflow = 'visible';
}

hideScrollBar();    // hiding cookie bar when website loads