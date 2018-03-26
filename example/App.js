import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Dimensions} from 'react-native';
import {TextGradient} from "react-native-text-gradient";

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    renderTextGradient(info, index) {
        return (
            <TouchableOpacity key={index.toString()} style={styles.gradientContainer}>
                <Text>{JSON.stringify(info)}</Text>
                <TextGradient
                    style={[styles.gradient, {margin: 12}]}
                    text={"Some gradient text"}
                    startPoint={info.startPoint}
                    endPoint={info.endPoint}
                    colors={info.colors}
                    locations={[0, 0.5]}
                    fontSize={20}
                />
            </TouchableOpacity>
        );
    }

    render() {
        const examples = [{
            startPoint: {x: 0, y: 0},
            endPoint: {x: 1, y: 1},
            colors: ["#ff0000", "#00ff00"]
        }, {
            startPoint: {x: 0, y: 0.5},
            endPoint: {x: 1, y: 1},
            colors: ["purple", "red"]
        }];

        return (
            <View style={styles.container}>
                {examples.map(this.renderTextGradient)}
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
        alignItems: "center",
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: "black"
    },
    gradient: {
    }
});
