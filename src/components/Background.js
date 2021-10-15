import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Background = () => {
    return (
        <View style={styles.container}>
            <Text>Background</Text>
        </View>
    );
}

export default Background;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});