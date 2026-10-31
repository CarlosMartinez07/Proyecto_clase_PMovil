# Laboratorio 1: Componentes reutilizables para CampusCafé

Alumno: Carlos Roberto Martínez Paredes

> Responde con tus palabras, 3 a 5 líneas, citando archivo y línea de TU rama.

## P1
type BotonAccionProps = {
  texto: string;
  alPresionar: () => void;
  apariencia?: Apariencia; 
  tamano?: Tamano; 
  anchoCompleto?: boolean; 
  inhabilitado?: boolean; 
  enProceso?: boolean; 
Es opcional porque se puede modificar para cada diferente uso y es algo que tendria que escribir cada una de las pantallas y conlleva mas lineas de codigo.
En las lineas 29 y 30 estipulamos valores por defecto para que disabled haga que TouchableOpacity ignore el toque y no llame a OnPress
Se tendria que bajar la opacidad y deshabilitar el boton para que al tocarlo no ocurra nada

## P2
 const pedirOtraVez = (producto: Producto): void => {
    Alert.alert(Pedido rápido: ${producto.nombre});
  };
Este comando genera el pedido y lo encapsula en producto
Luego de eso pasa a la tarjeta en la linea 64
alPresionarBoton={pedirOtraVez}

## P3


## P4


## P5


## P6


## E1


## E2


## E3

