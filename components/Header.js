/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet, Text, Platform} from 'react-native';

const Header = () => (
    <Text style={styles.titulo}>Cripto App</Text>
);

const styles = StyleSheet.create({
    titulo:{
        paddingTop: Platform.OS === 'ios' ? 50 : 10,
        fontFamily: 'Lato-Black',
        backgroundColor: '#000',
        paddingBottom: 10,
        textAlign: 'center',
        textTransform: 'capitalize',
        fontSize: 20,
        color: '#fff',
    },
});

export default Header;
