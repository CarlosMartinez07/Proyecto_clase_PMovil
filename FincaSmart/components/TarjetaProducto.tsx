import { StyleSheet, Text, View } from 'react-native';
import type { Producto } from '../types/menu';
import { calcularPrecioFinal } from '../utils/precios';
import { BotonAccion } from './BotonAccion';

type TarjetaProductoProps = {
  producto: Producto;
  alPresionarBoton: (producto: Producto) => void; // lo que pasa lo decide la pantalla
  formatearPrecio: (valor: number) => string; // cómo se escribe un precio lo decide la pantalla
  textoBoton?: string; // por defecto 'Agregar'
};

export function TarjetaProducto({
  producto,
  alPresionarBoton,
  formatearPrecio,
  textoBoton = 'Agregar',
}: TarjetaProductoProps) {
  const agotado = producto.disponibilidad === 'agotado';
  const precioFinal = calcularPrecioFinal(producto);

  return (
    <View style={[estilos.tarjeta, agotado && estilos.tarjetaAtenuada]}>
      <View style={estilos.filaEtiquetas}>
        <View style={[estilos.etiqueta, estilosFondoCategoria[producto.categoria]]}>
          <Text style={[estilos.textoEtiqueta, estilosTextoCategoria[producto.categoria]]}>
            {producto.categoria}
          </Text>
        </View>
        {producto.esNuevo === true && (
          <View style={[estilos.etiqueta, estilos.etiquetaNuevo]}>
            <Text style={[estilos.textoEtiqueta, estilos.textoEtiquetaNuevo]}>Nuevo</Text>
          </View>
        )}
        {producto.disponibilidad === 'pocasUnidades' && (
          <View style={[estilos.etiqueta, estilos.etiquetaUltimas]}>
            <Text style={[estilos.textoEtiqueta, estilos.textoEtiquetaUltimas]}>
              Últimas unidades
            </Text>
          </View>
        )}
      </View>

      <Text style={estilos.nombre}>{producto.nombre}</Text>

      <View style={estilos.filaPrecio}>
        {producto.descuentoPorcentaje !== undefined && (
          <Text style={estilos.precioTachado}>{formatearPrecio(producto.precio)}</Text>
        )}
        <Text style={estilos.precioFinal}>{formatearPrecio(precioFinal)}</Text>
      </View>

      <BotonAccion
        texto={agotado ? 'Agotado' : textoBoton}
        alPresionar={() => alPresionarBoton(producto)}
        tamano="pequeno"
        inhabilitado={agotado}
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  tarjeta: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E4D9CF',
    padding: 14,
    gap: 8,
  },
  tarjetaAtenuada: {
    opacity: 0.55,
  },
  filaEtiquetas: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  etiqueta: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  textoEtiqueta: {
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  etiquetaNuevo: { backgroundColor: '#1F7A4D' },
  textoEtiquetaNuevo: { color: '#FFFFFF' },
  etiquetaUltimas: { backgroundColor: '#FFE8B3' },
  textoEtiquetaUltimas: { color: '#7A4A00' },
  nombre: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2B1D14',
  },
  filaPrecio: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  precioTachado: {
    fontSize: 14,
    color: '#8A7B70',
    textDecorationLine: 'line-through',
  },
  precioFinal: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2B1D14',
  },
});

// Un color propio por categoría. Se indexa con el valor de la unión.
const estilosFondoCategoria = StyleSheet.create({
  bebida: { backgroundColor: '#D6E8F5' },
  comida: { backgroundColor: '#F5DDD0' },
  postre: { backgroundColor: '#EBD9F2' },
});

const estilosTextoCategoria = StyleSheet.create({
  bebida: { color: '#1B4F72' },
  comida: { color: '#8A3B12' },
  postre: { color: '#5B2A73' },
});
