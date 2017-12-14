import * as React from "react";
import {Component} from "react";
import {requireNativeComponent, Text, View, processColor} from "react-native";

export const SVBTextGradient = requireNativeComponent("SVBTextGradient", null);

export class TextGradient extends Component {
    render() {
        return (
            <SVBTextGradient
                style={this.props.style}
                text={this.props.text}
                startPoint={this.props.startPoint}
                endPoint={this.props.endPoint}
                colors={this.props.colors && this.props.colors.map(processColor)}
                locations={this.props.locations}
                fontFamily={this.props.fontFamily}
                fontSize={this.props.fontSize}
            />);
    }
}