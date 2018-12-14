<?php


$nombre = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49];




	for ($i = 0; $i <= 49; $i ++)
			{
				$random = array_rand($nombre);
				$indice = $nombre[$random];			
			}

			echo $indice;

		console_log($indice);


		//$indice = array_rand($nombre);

		//mixed array_rand(array $nombre[int $num = 6]);

		shuffle($nombre);

  ?>