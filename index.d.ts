declare module "react-native-text-gradient" {
    import {Component} from "react";
    import {ViewStyle} from "react-native";

    interface TextGradientProps {
        style: ViewStyle;
        text: string;
        fontFamily?: string;
        fontSize?: number;
        colors: string[];
        startPoint?: { x: number, y: number };
        endPoint?: { x: number, y: number };
        locations?: number[];
    }

    export class TextGradient extends Component<TextGradientProps> {
    }
}
