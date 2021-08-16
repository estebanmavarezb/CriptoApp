/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text, TouchableHighlight, Alert } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import axios from 'axios';

const Formulario = ({moneda, cripto, setMoneda, setCripto, setConsultarApi}) => {
    ///lista de monedas
    const monedas = [
        {
            id: 1,
            label: 'Dolar (USD)',
            value: 'USD',
        },
        {
            id: 2,
            label: 'Euro',
            value: 'EUR',
        },
        {
            id: 3,
            label: 'Yuan',
            value: 'CNY',
        },
        {
            id: 4,
            label: 'Libra Esterlina',
            value: 'GBP',
        },
        {
            id: 5,
            label: 'Peso Argentino',
            value: 'ARS',
        },
    ];

    const [criptos, setCriptos] = useState([]);

    ///Llamado a la api
    useEffect(() => {
       const consultaApi = async () => {
           const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
           const resultado = await axios.get(url);
           setCriptos(resultado?.data?.Data);
       };
       consultaApi();
    }, []);
    //Almacenador de las monedas
    const obtenerMoneda = (e) =>{
        setMoneda(e);
    };
    const obtenerCripto = (crip) =>{
        setCripto(crip);
    };
    ///Cotizador
    const cotizador = () => {
        if(moneda.trim() === '' || cripto.trim() === ''){
            mostrarAlerta();
            return;
        }
        setConsultarApi(true);
    };
    ///Alerta
    const mostrarAlerta = () => {
        Alert.alert(
            'Disculpe, por favor..',
            'Seleccione ambos campos',
            [
               {text: 'OK'},
            ]
        );
    };
    return (
        <View>
            <View style={styles.containerMoneda}>
                <Text style={styles.labelMoneda}>Moneda:</Text>
                <Picker
                    selectedValue={moneda}
                    onValueChange={ (mon) => obtenerMoneda(mon)}
                    style={styles.selectMoneda}
                >
                    <Picker.Item label="- Seleccione -" value=""/>
                    {monedas?.map(mon => (
                        <Picker.Item key={mon?.id} label={mon?.label} value={mon?.value}/>
                    ))}
                </Picker>
            </View>
            <View style={styles.containerMoneda}>
                <Text style={styles.labelMoneda}>Cripto:</Text>
                <Picker
                    selectedValue={cripto}
                    onValueChange={ crip => obtenerCripto(crip)}
                    style={styles.selectMoneda}
                    >
                    <Picker.Item label="- Seleccione -" value=""/>
                    {criptos.map((crip) => (
                        <Picker.Item key={crip?.CoinInfo?.Id} label={crip?.CoinInfo?.FullName} value={crip?.CoinInfo?.Name} />
                    ))}
                </Picker>
            </View>
            <TouchableHighlight
                style={styles.btn}
                onPress={() => cotizador()}
            >
                <Text style={styles.btnText}>Cotizar</Text>
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    label:{
        fontFamily: 'Lato-Black',
        textTransform: 'uppercase',
        fontSize: 22,
        marginVertical: 20,
    },
    containerMoneda: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 30,
    },
    labelMoneda: {
        width: '30%',
        fontFamily: 'Lato-Black',
        textTransform: 'uppercase',
        fontSize: 18,
    },
    selectMoneda: {
        width: '50%',
    },
    btn: {
        backgroundColor: '#000',
        marginTop: 50,
        borderRadius: 20
    },
    btnText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'Lato-Black',
        textTransform: 'uppercase',
        fontSize: 18,
        padding: 10,
    },
});

export default Formulario;