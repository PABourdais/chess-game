import React from 'react';
import Board from "./src/components/Board";
import {StyleSheet, View, Text} from "react-native";
import {useFonts, Roboto_700Bold} from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';

export default function App() {
    let [fontsLoaded] = useFonts({
        Roboto_700Bold,
    });


    if (!fontsLoaded) {
        return <AppLoading/>;
    } else {
        return (<View style={styles.container}>
                <View style={{alignItems: 'center'}}>
                    <Text style={{fontFamily: 'Roboto_700Bold', color: 'white', fontSize: 40}}>CHESS GAME</Text>
                </View>
                <Board/>
            </View>
        )
    }

    ;
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgb(102, 51, 0)',
    },
});