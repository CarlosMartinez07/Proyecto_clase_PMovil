import { StyleSheet, Text, View } from 'react-native';
import { BotonAccion } from './BotonAccion';

type EncabezadoSeccionProps = {
  titulo: string;
  cantidad?: number; // si no se indica, no se muestra
  alVerTodo?: () => void; // si no se indica, no aparece "Ver todo"
};

export function EncabezadoSeccion({ titulo, cantidad, alVerTodo }: EncabezadoSeccionProps) {
  return (
    <View style={estilos.fila}>
      <Text style={estilos.titulo}>
        {cantidad !== undefined ? `${titulo} (${cantidad})` : titulo}
      </Text>
      {alVerTodo !== undefined && (
        <BotonAccion texto="Ver todo" apariencia="enlace" tamano="pequeno" alPresionar={alVerTodo} />
      )}
    </View>
  );
}

const estilos = StyleSheet.create({
  fila: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titulo: {
    fontSize: 22,
    fontWeight: '800',
    color: '#2B1D14',
  },
});
