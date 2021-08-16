/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Image, ScrollView, ActivityIndicator, Spinner} from 'react-native';
import  Header  from './components/Header';
import Formulario from './components/Form';
import  Cotizacion  from './components/Cotizador';
import axios from 'axios';

const App = () => {
  const [moneda, setMoneda] = useState('');
  const [cripto, setCripto] = useState('');
  const [consultarApi, setConsultarApi] = useState(false);
  const [resultado, setResultado] = useState({});
  const [cargando, setCargando] = useState(false)

  useEffect(() => {
    const cotizacion = async () =>{
      if(consultarApi){
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`;
        const resultados = await axios.get(url);

        setCargando(true);
        setTimeout(() =>{
          setResultado(resultados.data?.DISPLAY[cripto] [moneda]);
          setConsultarApi(false);
          setCargando(false)
        }, 3000);
      }
    };
    cotizacion();
  }, [consultarApi, cripto, moneda]);

  ///funcion que muestra el resultado
  const spinner = cargando ? <ActivityIndicator size="large" color="#000" /> : <Cotizacion resultado={resultado}/>;

  return (
    <>
     <Header />
     <Image
       source={require('./assets/img/cripto-portada.jpg')}
       style={styles.imagen}
     />
     <ScrollView>
      <View style={styles.container}>
        <Formulario
          moneda={moneda}
          cripto={cripto}
          setMoneda={setMoneda}
          setCripto={setCripto}
          setConsultarApi={setConsultarApi}
        />
        <View style={styles.spinners}>
          {spinner}
        </View>
      </View>
     </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  imagen: {
    width: '100%',
    height: 150,
  },
  container:{
    marginHorizontal: '5%',
  },
  spinners:{
    marginTop: 50
  }
});

export default App;