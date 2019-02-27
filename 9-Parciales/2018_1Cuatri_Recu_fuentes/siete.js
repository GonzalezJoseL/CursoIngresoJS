function mostrar()
{

var contador=0;
var nota;
var sexo;
var promedio;
var acumulador;
var sexonotamasbaja;
var varonesmayor;

while (contador<5)

	{
		nota=prompt("Ingrese la nota del alumno");
		console.log(nota);
		while(isNaN(nota)==true || nota<0 || nota>10)
		
		{
			nota=prompt("Por favor reingrese la nota del alumno");
			nota=parseInt(nota);
		}

		sexo=prompt("Ingrese el sexo del alumno")
		while(isNaN(nota)==false || sexo!=f || sexo!=m)
		{
			sexo=prompt("Por favor reingrese su sexo");
		}	

		acumulador=acumulador+nota
		if (contador==0);
		{
			notaMinima=nota
			sexonotamasbaja=sexo;
		}
		else
		{
			if (notaMinima)
		}

	}


contador=contador+1;










}
