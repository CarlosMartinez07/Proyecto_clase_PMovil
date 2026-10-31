import type { Producto } from '../types/menu';

export const menuDelDia: Producto[] = [
  {
    id: 'cafe-americano',
    nombre: 'Café americano',
    categoria: 'bebida',
    precio: 35,
    disponibilidad: 'disponible',
  },
  {
    id: 'licuado-fresa',
    nombre: 'Licuado de fresa',
    categoria: 'bebida',
    precio: 55,
    disponibilidad: 'pocasUnidades',
    esNuevo: true,
  },
  {
    id: 'empanada-queso',
    nombre: 'Empanada de queso',
    categoria: 'comida',
    precio: 30,
    disponibilidad: 'disponible',
    descuentoPorcentaje: 10,
  },
  {
    id: 'sandwich-pollo',
    nombre: 'Sándwich de pollo',
    categoria: 'comida',
    precio: 75,
    disponibilidad: 'agotado',
  },
  {
    id: 'pastel-chocolate',
    nombre: 'Pastel de chocolate',
    categoria: 'postre',
    precio: 45,
    disponibilidad: 'pocasUnidades',
    descuentoPorcentaje: 20,
  },
  {
    id: 'galleta-avena',
    nombre: 'Galleta de avena',
    categoria: 'postre',
    precio: 20,
    disponibilidad: 'disponible',
    esNuevo: true,
  },
];
