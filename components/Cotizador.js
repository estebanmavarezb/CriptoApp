/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Image, Text, ScrollView} from 'react-native';

const Cotizacion = ({resultado}) => {
    if(Object.keys(resultado).length === 0) return null;
    return (
        <View style={styles.resultadoContent}>
            <Text style={styles.title}>Cotización</Text>
            <Text style={[styles.texto, styles.precio]}>
                <Text style={styles.span}>{resultado.PRICE}</Text>
            </Text>
            <View style={styles.contentPrices}>
                <Text style={styles.texto}>High price: {''}
                    <Text style={styles.spanHigh}>{resultado.HIGHDAY}</Text>
                </Text>
                <Text style={styles.texto}>Low price: {''}
                    <Text style={styles.spanLow}>{resultado.LOWDAY}</Text>
                </Text>
            </View>
            <Text style={[styles.texto, styles.mb]}>Variación últimas 24 horas: {''}
                <Text style={styles.span}>{resultado.CHANGEPCT24HOUR} %</Text>
            </Text>
            <Text style={styles.texto}>Última actualización: {''}
                <Text style={styles.span}>{resultado.LASTUPDATE}</Text>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    resultadoContent:{
        backgroundColor: '#d1d7dc',
        padding: 10,
        alignItems: 'center',
    },
    contentPrices: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 30,
    },
    title:{
        color: '#000',
        textAlign: 'center',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontFamily: 'Lato-Regular',
        paddingVertical: 15,
        fontSize: 18,
    },
    spanHigh:{
        color: 'green',
    },
    spanLow:{
        color: 'red',
    },
    texto:{
        color: '#000',
        fontFamily: 'Lato-Regular',
    },
    precio:{
        fontSize: 22
    },
    span:{
        color: '#000',
        fontFamily: 'Lato-Black',
    },
    mb:{
        marginBottom: 10,
    },
});

export default Cotizacion;