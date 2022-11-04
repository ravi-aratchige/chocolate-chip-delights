function hideCookieBar() {
    document.querySelector('.overlay').style.display = "none";
    document.querySelector('.cookieBar').style.display = "none";
}

// adjusting height of right side based on height of left side to ensure responsivity

let leftSideHeight = document.querySelector('.leftSide').clientHeight;
let rightSideHeight = document.querySelector('.rightSide').clientHeight;

if (leftSideHeight > rightSideHeight) {
    rightSideHeight = leftSideHeight + "px";
} else {
    leftSideHeight = rightSideHeight + "px";
}