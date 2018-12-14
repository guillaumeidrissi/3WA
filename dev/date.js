
var week = new Array(); 

week[0] = 'Dimanche';
week[1] = "Lundi";
week[2] = "Mardi";
week[3] = 'Mercredi';
week[4] = 'Jeudi';
week[5] = 'Vendredi';
week[6] = 'Samedi';


console.log(week[2]);

var sunday = 0;


console.log(week[sunday]);

var month = new Array();


month[0] = "janvier";
month[1] = "fevrier";
month[2] = "mars";
month[3] = "avril";
month[4] = "mai";
month[5] = "juin";
month[6] = "juillet";
month[7] = "aout";
month[8] = "septembre";
month[9] = "octobre";
month[10] = "novembre";
month[11] = "decembre";

console.log(month[10]);

var date = new Date();

console.log(date);

console.log(date.getDate());
console.log(date.getDay());
console.log(date.getMonth());
console.log(date.getFullYear());



document.write('Nous sommes le ' + week[today.getDay()] + ' ');  
document.write(today.getDate() + ' ');
document.write(mont[today.getMonth()] + ' ');
document.write(today.getFullYear() + '.');

document.write('Nous sommes le ' + dayNames[today.getDay()] + ' ');  // dayNames[4]
document.write(today.getDate() + ' ');
document.write(monthNames[today.getMonth()] + ' ');
document.write(today.getFullYear() + '.');
