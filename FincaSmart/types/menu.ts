// Tipos compartidos del menú. Se declaran una sola vez y se importan donde se necesiten.

export type Categoria = 'bebida' | 'comida' | 'postre';

export type Disponibilidad = 'disponible' | 'pocasUnidades' | 'agotado';

export type Producto = {
  id: string;
  nombre: string;
  categoria: Categoria;
  precio: number;
  disponibilidad: Disponibilidad;
  descuentoPorcentaje?: number; // solo algunos productos tienen descuento
  esNuevo?: boolean; // solo algunos productos son nuevos
};
