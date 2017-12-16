import {Platform} from "react-native";
import TextGradientIos from "./index.ios.js";
import TextGradientAndroid from "./index.android.js";

const TextGradient = Platform.OS === "ios" ? TextGradientIos : TextGradientAndroid;
export default TextGradient;