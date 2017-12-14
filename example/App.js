import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Dimensions} from 'react-native';
import {TextGradient} from "react-native-text-gradient";

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {isStaticHeight: false};
    }

    showTextGradient() {
        if (Platform.OS == "ios") {
            return (
                <TouchableOpacity style={styles.gradientContainer}
                                  onPress={() => this.setState({isStaticHeight: !this.state.isStaticHeight})}>

                    <TextGradient
                        style={[styles.gradientContainer, {margin: 12}]}
                        text={"some text"}
                        startPoint={{x: 0, y: 0.5}}
                        endPoint={{x: 1, y: 0.5}}
                        colors={["#ff0000", "#00ff00"]}
                        fontSize={50}
                    />
                </TouchableOpacity>
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
    },
    gradientContainer: {
        width: Dimensions.get("window").width,
        height: 50,
        backgroundColor: "transparent",
    }
});
