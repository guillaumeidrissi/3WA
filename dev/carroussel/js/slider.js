'use strict';   // Mode strict du JavaScript


/*

var carrousel = $('#carrousel');
var img = $('#carrousel img');
indexImg = img.length - 1;
i =0;
currentImg = img.eq(i);

img.css('display', 'none'); 
currentImg.css('display', 'block'); 

carrousel.append('<div class="controls"> <span class="prev">Precedent</span> <span class="next">Suivant</span> </div>');

$('.next').click(function(){ 

    i++; 
    if( i <= indexImg ){
        $img.css('display', 'none');
        $currentImg = $img.eq(i);
        $currentImg.css('display', 'block');
    }
    else{
        i = indexImg;
    }

});

$('.prev').click(function(){ 

    i--; 
    if( i >= 0 ){
        img.css('display', 'none');
        currentImg = img.eq(i);
        currentImg.css('display', 'block');
    }
    else{
        i = 0;
    }

});

var time = 7;

function slideImg(){
	setTimeout(function(){
		
		if(i < indexImg){
		i++;
	}
	else{
		i = 0;
	}

	img.css('display','none');

	currentImg = img.eq(i);
	currentImg.css('display', 'block');

	slideImg();

	}, 	time * 1000);


slideImg();

}


*/

var barreOutil = document.querySelector('#toolbar-toggle');
var nav = document.querySelector('#tools');
var previous = document.getElementById('slider-previous');
var play = document.getElementById('slider-toggle');
var next = document.getElementById('slider-next');
var random = document.getElementById('slider-random');
var slider = document.querySelector('#slider img')
var src = slider.getAttribute('src');
var timer;
var isPlaying = false;
var faPlay = document.querySelector('#slider-toggle i')
var count = 0;
var photo = ["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg","images/6.jpg"]

function toolbar(){
	nav.classList.toggle('hide');
}
function nextPic(){
	count++;
	slider.src= photo[count];
	if( count > 5){
		count = 0;
		slider.src= photo[count];
	}
}
function time(){
	if(isPlaying == false){
		timer = window.setInterval(nextPic,5000);
		isPlaying = true;
	}else {
		window.clearInterval(timer);
		isPlaying = false;
	}
	faPlay.classList.toggle('fa-play');
	faPlay.classList.toggle('fa-pause');
}
function player(){
	slider.src= photo[count];
	count++;
	if( count > 5){
		window.clearInterval(timer);
		slider.src= photo[0];
		time();
	}
	else if (play.addEventListener('click',time) == true){
		window.clearInterval(timer);
	}
}
function pause(){
}
function previousPic(){
	count--;
	slider.src= photo[count];
	if( count < 0){
		count = 5;
		slider.src= photo[count];
	}
}
function getRandomInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomPlayer(){
var number = getRandomInteger(0, 5);
	slider.src= photo[number];	
	}
function myFunction(event){
	console.log(event.keyCode);
}
barreOutil.addEventListener('click', toolbar);
next.addEventListener('click',nextPic);
previous.addEventListener('click',previousPic);
play.addEventListener('click',time);
random.addEventListener('click',randomPlayer);
slider.src= photo[0];
document.addEventListener('keyup',myFunction)







