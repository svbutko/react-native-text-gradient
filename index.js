import * as React from "react";
import {Component} from "react";
import {Platform, processColor, requireNativeComponent, StyleSheet, Text, View} from "react-native";

const TextGradientView = Platform.OS === "ios"
    ? requireNativeComponent("SVBTextGradient", null)
    : requireNativeComponent("TextGradient", null);

const processPoint = (name, point) => {
    if (Platform.OS === "ios") {
        return point;
    } else {
        if (point != null && typeof point === 'object') {
            return [point.x, point.y];
        } else {
            throw Error(name + " is not an object");
        }
    }
};

export class TextGradient extends Component {
    render() {
        const textStyle = {
            fontFamily: this.props.fontFamily,
            fontSize: this.props.fontSize,
            color: "transparent",
            flexShrink: 1,
            margin: 0,
            padding: 0,
            borderColor: "transparent",
            borderWidth: 0
        };

        return (
            <View style={this.props.style}>
                <View style={styles.container}>
                    <View style={styles.innerContainer}>
                        <TextGradientView
                            style={StyleSheet.absoluteFill}
                            text={this.props.text}
                            startPoint={processPoint("startPoint", this.props.startPoint)}
                            endPoint={processPoint("endPoint", this.props.endPoint)}
                            colors={this.props.colors && this.props.colors.map(processColor)}
                            locations={this.props.locations}
                            fontFamily={this.props.fontFamily}
                            fontSize={this.props.fontSize}
                        />
                        <Text style={textStyle} allowFontScaling={false} numberOfLines={1}>{this.props.text}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: "flex-start"
    },
    innerContainer: {
        flexDirection: "row",
        flexShrink: 1,
        borderWidth: 0,
        borderColor: "green"
    }
});