
function getRandomInt(min, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
}


var pc = getRandomInt(1, 1000);

var choix = 0;

var essai = 0;

do
{

essai ++;
choix = parseInt(window.prompt('Un chiffre entre 1 et 1000 ?'));

if (choix > pc)
	{
		alert("plus petit");
	}
	else if(choix < pc)
	{
		alert("plus grand");
	}
	else
	{
		alert("bravo");
	}
}while(pc != choix)

alert(+essai+" essais");


