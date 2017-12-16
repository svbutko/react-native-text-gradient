package com.svbutko.textgradient;

import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.uimanager.PixelUtil;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.LinearGradient;
import android.graphics.Paint;
import android.graphics.Path;
import android.graphics.RectF;
import android.graphics.Shader;
import android.widget.TextView;

import android.graphics.Color;
import android.util.AttributeSet;

public class TextGradientView extends TextView {

    private final Paint mPaint = new Paint(Paint.ANTI_ALIAS_FLAG);
    private LinearGradient mShader;

    private float[] mLocations;
    private float[] mStartPoint = {0, 0};
    private float[] mEndPoint = {0, 1};
    private int[] mColors;
    private int[] mSize = {0, 0};


    public TextGradientView(Context context) {
        super(context);
    }

    public void setStartPoint(ReadableArray startPoint) {
        mStartPoint = new float[]{(float) startPoint.getDouble(0), (float) startPoint.getDouble(1)};
        drawGradient();
    }

    public void setEndPoint(ReadableArray endPoint) {
        mEndPoint = new float[]{(float) endPoint.getDouble(0), (float) endPoint.getDouble(1)};
        drawGradient();
    }

    public void setColors(ReadableArray colors) {
        int[] _colors = new int[colors.size()];
        for (int i=0; i < _colors.length; i++)
        {
            _colors[i] = colors.getInt(i);
        }
        mColors = _colors;
        drawGradient();
    }

    public void setLocations(ReadableArray locations) {
        float[] _locations = new float[locations.size()];
        for (int i=0; i < _locations.length; i++)
        {
            _locations[i] = (float) locations.getDouble(i);
        }
        mLocations = _locations;
        drawGradient();
    }

    @Override
    protected void onSizeChanged(int w, int h, int oldw, int oldh) {
        mSize = new int[]{w, h};
        drawGradient();
    }

    private void drawGradient() {
        // guard against crashes happening while multiple properties are updated
        if (mColors == null || (mLocations != null && mColors.length != mLocations.length))
            return;
        mShader = new LinearGradient(
            mStartPoint[0] * mSize[0],
            mStartPoint[1] * mSize[1],
            mEndPoint[0] * mSize[0],
            mEndPoint[1] * mSize[1],
            mColors,
            mLocations,
            Shader.TileMode.CLAMP);
        mPaint.setShader(mShader);
        invalidate();
    }

    @Override
    protected void onLayout( boolean changed, int left, int top, int right, int bottom )
    {
        super.onLayout( changed, left, top, right, bottom );
        if(changed)
        {
            getPaint().setShader(new LinearGradient(0, 0, 0, getHeight(), Color.RED, Color.BLUE, Shader.TileMode.CLAMP ) );
        }
    }
}