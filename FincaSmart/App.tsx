import { Alert, ScrollView, StyleSheet, View } from 'react-native';
import { BotonAccion } from './components/BotonAccion';
import { EncabezadoSeccion } from './components/EncabezadoSeccion';
import { TarjetaProducto } from './components/TarjetaProducto';
import { menuDelDia } from './data/productos';
import type { Producto } from './types/menu';
import { formatearPrecio } from './utils/precios';

const IDS_FAVORITOS: string[] = ['cafe-americano', 'galleta-avena'];

export default function App() {
  const favoritos = menuDelDia.filter((producto) => IDS_FAVORITOS.includes(producto.id));

  // Funciones de la pantalla: solo muestran mensajes.
  const mostrarMenuCompleto = (): void => {
    Alert.alert('Mostrando el menú completo');
  };

  const agregarAlPedido = (producto: Producto): void => {
    Alert.alert(`${producto.nombre} agregado al pedido`);
  };

  const pedirOtraVez = (producto: Producto): void => {
    Alert.alert(`Pedido rápido: ${producto.nombre}`);
  };

  const confirmarPedido = (): void => {
    Alert.alert('Pedido confirmado');
  };

  const vaciarPedido = (): void => {
    Alert.alert('Se vació el pedido');
  };

  // El botón "Enviando..." está en proceso: este mensaje nunca debería aparecer.
  const enviarPedido = (): void => {
    console.log('Enviando pedido...');
  };

  return (
    <ScrollView style={estilos.pantalla} contentContainerStyle={estilos.contenido}>
      <View style={estilos.seccion}>
        <EncabezadoSeccion
          titulo="Menú del día"
          cantidad={menuDelDia.length}
          alVerTodo={mostrarMenuCompleto}
        />
        {menuDelDia.map((producto) => (
          <TarjetaProducto
            key={producto.id}
            producto={producto}
            alPresionarBoton={agregarAlPedido}
            formatearPrecio={formatearPrecio}
          />
        ))}
      </View>

      <View style={estilos.seccion}>
        <EncabezadoSeccion titulo="Sus favoritos" cantidad={favoritos.length} />
        {favoritos.map((producto) => (
          <TarjetaProducto
            key={producto.id}
            producto={producto}
            alPresionarBoton={pedirOtraVez}
            formatearPrecio={formatearPrecio}
            textoBoton="Pedir otra vez"
          />
        ))}
      </View>

      <View style={estilos.seccion}>
        <EncabezadoSeccion titulo="Su pedido" />
        <BotonAccion texto="Confirmar pedido" alPresionar={confirmarPedido} anchoCompleto />
        <BotonAccion
          texto="Vaciar pedido"
          apariencia="destructiva"
          alPresionar={vaciarPedido}
          anchoCompleto
        />
        <BotonAccion texto="Enviando..." alPresionar={enviarPedido} anchoCompleto enProceso />
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  pantalla: {
    flex: 1,
    backgroundColor: '#F7F1EA',
  },
  contenido: {
    paddingTop: 56, // evita que el contenido quede detrás de la barra de estado
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  seccion: {
    gap: 12,
    marginBottom: 28,
  },
});
