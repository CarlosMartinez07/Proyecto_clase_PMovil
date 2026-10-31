import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from 'react-native';

export type Apariencia = 'principal' | 'alternativa' | 'destructiva' | 'enlace';
export type Tamano = 'pequeno' | 'mediano' | 'grande';

type BotonAccionProps = {
  texto: string;
  alPresionar: () => void;
  apariencia?: Apariencia; 
  tamano?: Tamano; 
  anchoCompleto?: boolean; 
  inhabilitado?: boolean; 
  enProceso?: boolean; 
};

const COLOR_INDICADOR: Record<Apariencia, string> = {
  principal: '#FFFFFF',
  alternativa: '#6F4E37',
  destructiva: '#FFFFFF',
  enlace: '#6F4E37',
};

export function BotonAccion({
  texto,
  alPresionar,
  apariencia = 'principal',
  tamano = 'mediano',
  anchoCompleto = false,
  inhabilitado = false,
  enProceso = false,
}: BotonAccionProps) {
  const bloqueado = inhabilitado || enProceso;

  return (
    <TouchableOpacity
      style={[
        estilosBase.contenedor,
        estilosApariencia[apariencia],
        estilosTamano[tamano],
        anchoCompleto && estilosBase.anchoCompleto,
        inhabilitado && estilosBase.inhabilitado,
      ]}
      onPress={alPresionar}
      disabled={bloqueado}
      activeOpacity={0.7}
    >
      <Text
        style={[
          estilosBase.texto,
          estilosTextoApariencia[apariencia],
          estilosTextoTamano[tamano],
          enProceso && estilosBase.textoOculto,
        ]}
      >
        {texto}
      </Text>
      {enProceso && (
        <ActivityIndicator style={estilosBase.indicador} color={COLOR_INDICADOR[apariencia]} />
      )}
    </TouchableOpacity>
  );
}

const estilosBase = StyleSheet.create({
  contenedor: {
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderWidth: 1.5,
  },
  anchoCompleto: {
    alignSelf: 'stretch',
  },
  inhabilitado: {
    opacity: 0.45,
  },
  texto: {
    fontWeight: '600',
  },
  // El texto se mantiene (invisible) para conservar el ancho y el alto del botón.
  textoOculto: {
    opacity: 0,
  },
  indicador: {
    position: 'absolute',
  },
});

const estilosApariencia = StyleSheet.create({
  principal: { backgroundColor: '#6F4E37', borderColor: '#6F4E37' },
  alternativa: { backgroundColor: 'transparent', borderColor: '#6F4E37' },
  destructiva: { backgroundColor: '#B3261E', borderColor: '#B3261E' },
  enlace: { backgroundColor: 'transparent', borderColor: 'transparent' },
});

const estilosTextoApariencia = StyleSheet.create({
  principal: { color: '#FFFFFF' },
  alternativa: { color: '#6F4E37' },
  destructiva: { color: '#FFFFFF' },
  enlace: { color: '#6F4E37', textDecorationLine: 'underline' },
});

const estilosTamano = StyleSheet.create({
  pequeno: { height: 32, paddingHorizontal: 12 },
  mediano: { height: 44, paddingHorizontal: 16 },
  grande: { height: 54, paddingHorizontal: 24 },
});

const estilosTextoTamano = StyleSheet.create({
  pequeno: { fontSize: 13 },
  mediano: { fontSize: 16 },
  grande: { fontSize: 18 },
});
