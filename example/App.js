/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from "react";
import {Platform, requireNativeComponent, StyleSheet, Text, View} from "react-native";

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const TextGradient = Platform.OS == "ios" ? requireNativeComponent("SVBTextGradient", null) : require("react-native-text-gradient");
export default class App extends Component {
    showTextGradient = (): JSX.Element | null => {
        if (Platform.OS == "ios") {
            return (
                <View>
                    <Gradient style={{width: 100, height: 50, backgroundColor: "transparent"}}/>
                </View>
            );
        } else {
            TextGradient.show("RN-text-gradient has been linked successfully!", TextGradient.LONG);

            return null;
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {this.showTextGradient()}
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit App.js
                </Text>
                <Text style={styles.instructions}>
                    {instructions}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});
