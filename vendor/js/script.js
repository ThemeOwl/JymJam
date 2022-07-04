'use strict'

//Video Starts
let videoPlayer = document.getElementById('videoPlayer');
let playButton = document.querySelector('.play-btn');
let playIcon = document.querySelector('#play');
let pauseIcon = document.querySelector('#pause');

videoPlayer.play();
    

    // Play / pause.
playButton.addEventListener('click', function () {
    if (videoPlayer.paused == false) {
        videoPlayer.pause();
        videoPlayer.firstChild.nodeValue = 'Play';
        // playIcon.style.position = 'absolute';
        playIcon.style.margin = '0 0 0 0.9em';
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';

    } else {
        videoPlayer.play();
        videoPlayer.firstChild.nodeValue = 'Pause';
       // playIcon.style.position = 'absolute';
        pauseIcon.style.display = 'block';
        pauseIcon.style.margin = '0 0 0 0.9em';
        playIcon.style.display='none';
    }
});
//Video Ends

//Slider Starts
let slideIndex = 1;
function showSlides() {
	let slides = document.getElementsByClassName("mySlides");
	if (slideIndex > slides.length) {slideIndex = 1;}
	if (slideIndex < 1) {slideIndex = slides.length;}
	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[slideIndex-1].style.display = "block";
	let dots = document.getElementsByClassName("slide-dot");
	for (let j = 0; j < dots.length; j++) {
		dots[j].className = dots[j].className.replace(" slide-dot-active", "");
	}
	dots[slideIndex-1].className += " slide-dot-active";
 }

function currentSlide(n) {
	slideIndex = n;
	showSlides();
}
window.onload = showSlides;

//Slider Ends
//Accoridan Starts
	var accItem = document.getElementsByClassName('accordionItem');
    var accHD = document.getElementsByClassName('accordionItemHeading');
    for (i = 0; i < accHD.length; i++) {
        accHD[i].addEventListener('click', toggleItem, false);
    }
    function toggleItem() {
        var itemClass = this.parentNode.className;
        for (i = 0; i < accItem.length; i++) {
            accItem[i].className = 'accordionItem close';
        }
        if (itemClass == 'accordionItem close') {
            this.parentNode.className = 'accordionItem open';
        }
    }
//Accordian Ends