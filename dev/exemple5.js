
var voiture = {}; 

voiture.marque = 'renault';
voiture.dateFabrication = 2004;
voiture.dateAchat = 2007;
voiture.passager1 = 'pierre';
voiture.passager2 = 'paul';

console.log(voiture);


console.log(voiture.marque);
console.log(voiture.dateFabrication);
console.log(voiture.dateAchat);
console.log(voiture.passager1);
console.log(voiture.passager2);


document.write('<ul><li>'+voiture.marque+'</li><li>'+voiture.dateFabrication+'</li><li>'+voiture.dateAchat+'</li><li>'+voiture.passager1+'</li><li>'+voiture.passager2+'</li></ul>');





var myCar = new Object();

myCar.brand         = 'Alfa Roméo';
myCar.buyDate       = new Date('2013-06-20');
myCar.passengers    = new Array();
myCar.passengers[0] = 'Nicolas';
myCar.passengers[1] = 'Charlotte';
myCar.year          = 2012;



document.write('<ul>');
document.write('<li>Marque : ' + myCar.brand + '</li>');
document.write('<li>Année de fabrication : ' + myCar.year + '</li>');
document.write('<li>Date de l\'achat : ' + myCar.buyDate.toDateString() + '</li>');
document.write('<li>Passager 1 : ' + myCar.passengers[0] + '</li>');
document.write('<li>Passager 2 : ' + myCar.passengers[1] + '</li>');
document.write('</ul>');




