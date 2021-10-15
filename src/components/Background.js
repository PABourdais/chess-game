import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const WHITE = "rgb(100,133, 68)";
const BLACK = "rgb(230,233, 198)";

const Square = ({row, col}) => {
    const offset = row % 2 === 0 ? 1 : 0;
    const backgroundColor = (col + offset) % 2 === 0 ? WHITE : BLACK;
    const color = (col + offset) % 2 === 0 ? BLACK : WHITE;
    return (
        <View style={[styles.containerSquare, {backgroundColor: backgroundColor}]}>
            <Text style={{color, fontSize: 15, opacity: col === 0 ? 1 : 0}}>{8 - row}</Text>
            <Text style={{color, fontSize: 15, alignSelf: 'flex-end', opacity: row === 7 ? 1 : 0}}>{String.fromCharCode("a".charCodeAt(0) + col)}</Text>
        </View>
    );
}

const Row = ({row}) => {
    return (
        <View style={styles.containerRow}>
            {new Array(8).fill(0).map((_, col) => (
                <Square key={col} row={row} col={col}/>
            ))}
        </View>
    );
}

const Background = () => {
    return (
        <View style={styles.container}>
            {new Array(8).fill(0).map((_, i) => (
                <Row key={i} row={i}/>
            ))}
        </View>
    );
}

export default Background;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerRow: {
        flex: 1,
        flexDirection: 'row',
    },
    containerSquare: {
        flex: 1,
        padding: 4,
        justifyContent: "space-between",
    },
});