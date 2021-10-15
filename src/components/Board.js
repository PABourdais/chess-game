import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {Dimensions, StyleSheet, View} from 'react-native';
import Background from "./Background";
const { width } = Dimensions.get("window");

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
        width: width,
        height: width,
    },
});