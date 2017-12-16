import * as React from "react";
import {Component} from "react";
import {requireNativeComponent, Text, View, processColor} from "react-native";

const TextGradientView = requireNativeComponent("TextGradient", null);

const convertPoint = (name, point) => {
    if (Array.isArray(point)) {
        console.warn(
            `LinearGradient '${name}' property shoule be an object with fields 'x' and 'y', ` +
            'Array type is deprecated.'
        );
    }
    if (point != null && typeof point == 'object') {
        return [point.x, point.y];
    }
    return point;
};


export class TextGradientAndroid extends Component {
    render() {
        return (
            <TextGradientView
                style={this.props.style}
                text={this.props.text}
                startPoint={convertPoint("startPoint", this.props.startPoint)}
                endPoint={convertPoint("endPoint", this.props.endPoint)}
                colors={this.props.colors && this.props.colors.map(processColor)}
                locations={this.props.locations}
                fontFamily={this.props.fontFamily}
                fontSize={this.props.fontSize}
            />
        );
    }
}