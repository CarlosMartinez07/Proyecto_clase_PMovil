import type { Producto } from '../types/menu';

// Para cambiar de moneda solo se modifica esta constante.
const SIMBOLO_MONEDA = 'L';

export const calcularPrecioFinal = (producto: Producto): number => {
  if (producto.descuentoPorcentaje === undefined) {
    return producto.precio;
  }
  return producto.precio * (1 - producto.descuentoPorcentaje / 100);
};

export const formatearPrecio = (valor: number): string => {
  return `${SIMBOLO_MONEDA} ${valor.toFixed(2)}`;
};
