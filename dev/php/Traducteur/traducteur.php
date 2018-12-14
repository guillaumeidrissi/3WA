<?php 


if(array_key_exists('word', $_POST) == true)
{
	$word = $_POST['word'];
    var_dump($word);


$direction = $_POST['direction'];

$dico = [

	'chat' => 'cat',
	'chien' => 'dog',
	'porte' => 'door',
    'voiture' => 'car'
];


 function translate($word, $direction, $dico)
{
	switch($direction)
    {
        case 'toFrench':
        	if(array_key_exists($word, $dico) == true)
        	{
            	 $translatedWord = $dico[$word];
                 
                 $message = "Le mot ".$word." se traduit par ".$translatedWord.".";
                 
            } else {
            	$message = "Je ne connais pas le mot ".$word.".";
            }
        break;
        
        case 'toEnglish':
        	if(in_array($word, $dico) == true)
        	{
            	$translatedWord = array_search($word, $dico);
                $message = "Le mot ".$word." se traduit par ".$translatedWord.".";

            } else {
            	 $message = "Je ne connais pas le mot ".$word.".";
            }            
            
        break;
        
        default:
        	$message = "Je ne sais traduire qu'en français et en anglais !";
        break;
      }
      
      return $message

}


if(array_key_exists('word', $_POST) == true)
{
	//var_dump($_POST);
    $word = strtolower($_POST['word']);
    $direction = $_POST['direction'];
    $result = translate($word, $direction, $dico);
}


include 'traducteur.phtml';


?>
