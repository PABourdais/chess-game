import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Background from "./Background";

const Board = () => {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" hidden={true}/>
            <Background/>
        </View>
    );
}

export default Board;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});