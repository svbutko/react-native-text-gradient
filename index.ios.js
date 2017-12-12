import * as React from "react";
import {Component} from "react";
import {requireNativeComponent, Text, View} from "react-native";

export const SVBTextGradient = requireNativeComponent("SVBTextGradient", null);

export class TextGradient extends Component {
    render() {
        return (
            <SVBTextGradient style={this.props.style}/>
        );
    }
}