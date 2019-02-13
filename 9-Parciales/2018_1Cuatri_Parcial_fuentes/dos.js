function mostrar()
{
	var valor1;
	var recargo1;
	var resultadofinal;

	valor1=prompt("Ingrese el valor del producto");
	valor1=parseInt(valor1);

	recargo1=(valor1*10)/100;
	resultadofinal=(valor1+recargo1);
	

	alert("El precio del producto en efectivo es :$ "+valor1+" ,con tarjeta tiene un recargo del 10% que seria $ "+recargo1+" de recargo, costandole final de $ "+resultadofinal);


}
