package com.svbutko.textgradient;

import android.content.res.AssetManager;
import android.graphics.Typeface;

import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.views.text.ReactFontManager;

public class TextGradientModule extends SimpleViewManager<TextGradientView> {

    public static final String REACT_CLASS = "TextGradient";
    public static final String PROP_COLORS = "colors";
    public static final String PROP_LOCATIONS = "locations";
    public static final String PROP_START_POINT = "startPoint";
    public static final String PROP_END_POINT = "endPoint";
    public static final String PROP_TEXT = "text";
    public static final String PROP_FONT_FAMILY = "fontFamily";
    public static final String PROP_FONT_SIZE = "fontSize";

    private static ReactFontManager fontManager = ReactFontManager.getInstance();
    private AssetManager _assets;

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected TextGradientView createViewInstance(ThemedReactContext context) {
        _assets = context.getAssets();

        return new TextGradientView(context);
    }

    @ReactProp(name = PROP_COLORS)
    public void setColors(TextGradientView textGradientView, ReadableArray colors) {
        textGradientView.setColors(colors);
    }

    @ReactProp(name = PROP_LOCATIONS)
    public void setLocations(TextGradientView textGradientView, ReadableArray locations) {
        if (locations != null) {
            textGradientView.setLocations(locations);
        }
    }

    @ReactProp(name = PROP_START_POINT)
    public void setStartPoint(TextGradientView textGradientView, ReadableArray startPoint) {
        textGradientView.setStartPoint(startPoint);
    }

    @ReactProp(name = PROP_END_POINT)
    public void setEndPoint(TextGradientView textGradientView, ReadableArray endPoint) {
        textGradientView.setEndPoint(endPoint);
    }

    @ReactProp(name = PROP_TEXT)
    public void setText(TextGradientView textGradientView, String text) {
        textGradientView.setText(text);
    }

    @ReactProp(name = PROP_FONT_SIZE)
    public void setFontSize(TextGradientView textGradientView, int fontSize) {
        textGradientView.setTextSize(fontSize);
    }

    @ReactProp(name = PROP_FONT_FAMILY)
    public void setFontFamily(TextGradientView textGradientView, String fontFamily) {
        textGradientView.setTypeface(fontManager.getTypeface(fontFamily, Typeface.NORMAL, _assets));
    }
}
