import * as React from "react";
import {Component} from "react";
import {requireNativeComponent, Text, View, processColor} from "react-native";

const TextGradientView = requireNativeComponent("TextGradient", null);

const convertPoint = (name, point) => {
    if (Array.isArray(point)) {
        console.warn(
            `TextGradient '${name}' property shoule be an object with fields 'x' and 'y', ` +
            'Array type is deprecated.'
        );
    }
    if (point != null && typeof point === 'object') {
        return [point.x, point.y];
    }
    return point;
};


export default class TextGradientAndroid extends Component {
    render() {
        const {style, text, startPoint, endPoint, colors, locations, fontFamily, fontSize} = this.props;

        return (
            <TextGradientView
                style={style}
                text={text}
                startPoint={convertPoint("startPoint", startPoint)}
                endPoint={convertPoint("endPoint", endPoint)}
                colors={colors && colors.map(processColor)}
                locations={locations}
                fontFamily={fontFamily}
                fontSize={fontSize}
            />
        );
    }
}