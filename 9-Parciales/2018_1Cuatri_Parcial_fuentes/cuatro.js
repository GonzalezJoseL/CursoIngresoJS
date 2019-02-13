function mostrar()
{

	var cantidadeproductos;
	var precioproductos
	var descuentodeldiez;
	var descuentoadicional;
	var pagocontarjeta;

	cantidadeproductos=prompt("Ingrese cantidad de productos");
	cantidadeproductos=parseInt(cantidadeproductos);

	precioproductos=prompt("Ingrese el valor de los productos");
	precioproductos=parseInt(precioproductos);

	descuentodeldiez=((precioproductos*10)/100);
	descuentoadicional=((precioproductos*25)/100);
	

	if (cantidadeproductos>2)
		{
			descuentodeldiez=((precioproductos*10)/100);
			


		}
	else
		{
			
		}

	if (precioproductos>1999)

		{	
			descuentoadicional=((precioproductos*25)/100);
		}








}
