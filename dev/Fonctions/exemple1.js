'use strict';



var ListeDeCourse = new Array();



function Ajout(item)
{
	ListeDeCourse.push(item);
}


function displayListeDeCourse()
{
	console.log("Il y a " + ListeDeCourse.length + " produits dans la liste");
	console.log(ListeDeCourse);
}


function RetraitTotal()
{
	ListeDeCourse = new Array();
}


function Retrait(item)
{
	var index;

	index = ListeDeCourse.indexOf(item);

	
	if(index == -1)
	{
		console.log( + item + " n'existe dans la liste de courses");

		return;
	}

	ListeDeCourse.splice(index, 1);
}



addItem('lait');
addItem('jus');
addItem('céréales');
addItem('fruits');
displayListeDeCourse();


Retrait(window.prompt("Quel souhaitez-vous supprimer dans la liste ?"));
displayListeDeCourse();


RetraitTotal();
displayListeDeCourse();