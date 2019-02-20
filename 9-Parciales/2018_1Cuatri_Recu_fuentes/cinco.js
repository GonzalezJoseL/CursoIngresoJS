function mostrar()

//cada habitacion de un hotel tiene un precio, hay promociones segun el tipo de pago
// si es con tarjeta visa un 10%, si es por un paypal un 15%, por mercadopago un 10%
// efectivo 20%, cualquier otr medio solo un 5%
//si compraste el paquete "todoIncluido" y pagas con paypal se te suma un 10% al descuento
//si pagas en efectivo, tenes varias opciones, el paquete "soloDesayunos" te suma un 10% al descuento,
//si el paquete es "todoIncluido te suma un 15% y para el resto de los paquete no tiene descuento adicional

{

var preciohabitacion;
var visa;
var paypal;	
var mercadopago;
var efectivo;
var allin;
var soloDesayunos;
var otro;
var pago;		


preciohabitacion=prompt("Ingrese el precio de su habitacion");
preciohabitacion=parseInt(preciohabitacion);
pago=prompt("Ingrese forma de pago");


//switch(preciohabitacion)

//{
	case "visa"
	preciohabitacion=(preciohabitacion*10/100);
	break;
	case "paypal"
	preciohabitacion=(preciohabitacion*15/100);
	break;
	case "mercadopago"
	preciohabitacion=(preciohabitacion*10/100);
	break;
	case "efectivo"
	preciohabitacion=(preciohabitacion*20/100);
	break;
	case "otro"
	preciohabitacion=(preciohabitacion*5/100);
	break;
//}
























































}
