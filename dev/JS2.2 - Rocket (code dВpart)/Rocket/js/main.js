'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/
var rocket = document.getElementById("rocket");
var firingButton = document.getElementById("firingButton");
var billboard = document.querySelector("#billboard span");
var start = 9;
var timer;

/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/
function countDown(){
	billboard.textContent = start;
	start--;
		if( start < 0 ){
        	window.clearInterval(timer);
		}
}


function pushFiringButton(){
	timer = window.setInterval(countDown, 1000);
	rocket.src = "images/rocket2.gif";
}

window.setTimeout(out, start * 1000)

function out() {
    rocket.src = 'images/rocket3.gif';
    rocket.classList.add('tookOff');
    firingButton.removeEventListener('click', onClickFiringButton);
}

firingButton.addEventListener('click', pushFiringButton) 


/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/

