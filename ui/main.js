console.log('Loaded!');

// change the text of main-text div
var element = document.getElementById('main-text'
    );
element.innerHTML = 'New Value';

// move the image

var img = document.getElementById('img');
var marginLeft = 0;
function moveRight() {
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function() {
    img.style.marginLeft = '100px';
    var interval = setInterval(moveRight, 100);
}
