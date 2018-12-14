var photo = 'WWWWWWWWWWWWBWWWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWW';
var lettre = photo.charAt(0);
var nombre = 1;
var result = 0;
var compressed_string = LRE(s);





function LRE(photo)
{
	for(var i = 1; i < photo.length ; i++)
	{
		if ( lettre != photo.charAt(i))
		{
			result += nombre;
			result += lettre;
			lettre = photo.charAt(i);
			nombre =0;
		}
		nombre++;
	}
	result += nombre;
	result += lettre;
	return result,

}


document.write("<p>string d'origine : " +photo+"</p>");
document.write("<p>string compressee : " + compressed_string+"</p>");