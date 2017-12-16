import {Platform} from "react-native";
import {TextGradientIos} from "./index.ios.js";
import {TextGradientAndroid} from "./index.android.js";

export const TextGradient = Platform.OS == "ios" ? TextGradientIos : TextGradientAndroid;