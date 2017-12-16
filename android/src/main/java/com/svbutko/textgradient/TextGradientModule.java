package com.svbutko.textgradient;

import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.PixelUtil;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

import android.graphics.Typeface;
import android.view.View;

public class TextGradientModule extends SimpleViewManager<TextGradientView> {

    public static final String REACT_CLASS = "TextGradient";
    public static final String PROP_COLORS = "colors";
    public static final String PROP_LOCATIONS = "locations";
    public static final String PROP_START_POINT = "startPoint";
    public static final String PROP_END_POINT = "endPoint";
    public static final String PROP_TEXT = "text";
    public static final String PROP_FONT_FAMILY = "fontFamily";
    public static final String PROP_FONT_SIZE = "fontSize";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected TextGradientView createViewInstance(ThemedReactContext context) {
        return new TextGradientView(context);
    }

    @ReactProp(name=PROP_COLORS)
    public void setColors(TextGradientView textGradientView, ReadableArray colors) {
        textGradientView.setColors(colors);
    }

    @ReactProp(name=PROP_LOCATIONS)
    public void setLocations(TextGradientView textGradientView, ReadableArray locations) {
        if (locations != null) {
            textGradientView.setLocations(locations);
        }
    }

    @ReactProp(name=PROP_START_POINT)
    public void setStartPoint(TextGradientView textGradientView, ReadableArray startPoint) {
        textGradientView.setStartPoint(startPoint);
    }

    @ReactProp(name=PROP_END_POINT)
    public void setEndPoint(TextGradientView textGradientView, ReadableArray endPoint) {
        textGradientView.setEndPoint(endPoint);
    }

    @ReactProp(name=PROP_TEXT)
    public void setText(TextGradientView textGradientView, String text) {
        textGradientView.setText(text);
    }

    @ReactProp(name=PROP_FONT_SIZE)
    public void setFontSize(TextGradientView textGradientView, int fontSize) {
        textGradientView.setTextSize(fontSize);
    }

    @ReactProp(name=PROP_FONT_FAMILY)
    public void setFontFamily(TextGradientView textGradientView, String fontFamily) {
        //TODO: should be changed later! (this code might have memory issues, better to use cache)
        //https://stackoverflow.com/questions/14343903/what-is-the-equivalent-of-androidfontfamily-sans-serif-light-in-java-code
        textGradientView.setTypeface(Typeface.create(fontFamily, Typeface.NORMAL));
    }
}