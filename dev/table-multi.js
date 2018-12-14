'use strict';

var table = parseInt(window.prompt('entrez un chiffre'));
var column; 
var line;



document.write('<table>');

for(column = 1; column <= table; column ++){
	document.write('<tr>');

	for(line = 1; line <= table; line ++){
			var result = column * line;
			if (column == line) {
				document.write('<td class="color">');
			} else {
				document.write('<td>');
			}
			
			document.write(result);
			document.write('</td>');
	}

	document.write('</tr>');
}

document.write('</table>');
