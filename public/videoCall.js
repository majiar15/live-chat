console.log("object");
window.URL = (window.URL || window.webkitURL);

navigator.getMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia);

navigator.getUserMedia({ audio: true, video: true }, function(video) {
    document.querySelector('#video').src = window.URL.createObjectURL(video);
})