function mostrar()
{
	var randomeada
	var mensaje;
	
	randomeada=Math.floor((Math.random() * 10) + 1);
	mensaje=""

	if(randomeada<=3)
	
	{
		mensaje=("Su nota es: "+randomeada+" Vamos, la proxima se puede ");
	}
		else

		if(randomeada<=9)
		{
			mensaje="Su nota es: "+randomeada+" APROBÓ";
		}

		else		

			if(randomeada>8)

			{
				mensaje="Su nota es: "+randomeada+ " EXCELENTE";
			}

	alert(mensaje);

}//FIN DE LA FUNCIÓN