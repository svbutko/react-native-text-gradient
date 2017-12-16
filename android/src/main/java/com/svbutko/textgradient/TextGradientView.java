package com.svbutko.textgradient;

import com.facebook.react.bridge.ReadableArray;
import android.content.Context;
import android.graphics.LinearGradient;
import android.graphics.Shader;
import android.support.v7.widget.AppCompatTextView;

public class TextGradientView extends AppCompatTextView {

    private float[] mLocations;
    private float[] mStartPoint = {0, 0};
    private float[] mEndPoint = {0, 1};
    private int[] mColors;

    public TextGradientView(Context context) {
        super(context);
    }

    public void setStartPoint(ReadableArray startPoint) {
        mStartPoint = new float[]{(float) startPoint.getDouble(0), (float) startPoint.getDouble(1)};
    }

    public void setEndPoint(ReadableArray endPoint) {
        mEndPoint = new float[]{(float) endPoint.getDouble(0), (float) endPoint.getDouble(1)};
    }

    public void setColors(ReadableArray colors) {
        int[] _colors = new int[colors.size()];
        for (int i=0; i < _colors.length; i++)
        {
            _colors[i] = colors.getInt(i);
        }
        mColors = _colors;
    }

    public void setLocations(ReadableArray locations) {
        float[] _locations = new float[locations.size()];
        for (int i=0; i < _locations.length; i++)
        {
            _locations[i] = (float) locations.getDouble(i);
        }
        mLocations = _locations;
    }

    private LinearGradient getLinearGradient() {
        return new LinearGradient(mStartPoint[0], mStartPoint[1], mEndPoint[0], mEndPoint[1], mColors[0], mColors[1], Shader.TileMode.CLAMP);
    }

    @Override
    protected void onLayout(boolean changed, int left, int top, int right, int bottom)
    {
        super.onLayout(changed, left, top, right, bottom);
        if(changed)
        {
            getPaint().setShader(getLinearGradient());
        }
    }
}