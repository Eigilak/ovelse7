import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

export default class PlatformScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Farve ændrer sig afhængig af enhed </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        ...Platform.select({
            ios: {
                backgroundColor: 'red'
            },
            android: {
                backgroundColor: 'blue'
            },
            web:{
                backgroundColor:'green'
            }
        })
    }
});
