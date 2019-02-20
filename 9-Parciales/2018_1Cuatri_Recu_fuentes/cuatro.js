function mostrar()

// un sistema que ingrese 4 improtes mostrar el mayor de la comprar
//ecir cuanto es el total si supera 100 pesos hace 10$ de desc,
//s supera los 50 el des es del 5% y en el caso de ser de -50 le sumo un 20%


{

var importe1;
var importe2;
var importe3;
var importe4;
var sumadeimportes;
var descuento1;
var descuento2;
var aumento1;
var total;
var mensaje;

importe1=prompt("Ingrese el primer importe");
importe1=parseInt(importe1);
importe2=prompt("Ingrese el segundo importe");
importe2=parseInt(importe2);
importe3=prompt("Ingrese el tercer importe");
importe3=parseInt(importe3);
importe4=prompt("Ingrese el cuarto importe");
importe4=parseInt(importe4);

sumadeimportes=(importe1+importe2+importe3+importe4);
descuento=(sumadeimportes+descuento);


if(importe1>importe2 && importe1>importe3 && importe1>importe4)

	{
	mensaje="Tu primer importe es el mayor";
	} 
	else
	{
	 if(importe2>importe1 && importe2>importe3 && importe2>importe4)
		{
		mensaje="Tu segundo importe es el mayor";
		} 
		else 
		{
			if(importe3>importe1 && importe3>importe2 && importe3>importe4)
			{
			mensaje="Tu tercer importe es el mayor";
			} 
			else 
			{
			mensaje="Tu cuarto importe es el mayor";
			}
		}
	}		
	


alert(mensaje);




















}
