#import "SVBTextGradient.h"
#import <React/RCTView.h>
#import <React/RCTConvert.h>
#import <React/RCTFont.h>

@implementation SVBTextGradient {

@private
    UILabel *_label;
    CAGradientLayer *_gradient;
    RCTView *view;
}

- (instancetype)init {
    self = [super init];
    if (self) {
        _gradient = [[CAGradientLayer alloc] init];
        [self.layer addSublayer:_gradient];
        _label = [[UILabel alloc] init];
        [self addSubview:_label];
        self.maskView = _label;
    }

    return self;
}

- (void)reactSetFrame:(CGRect)frame {
    [super reactSetFrame:frame];
}

- (void)layoutSubviews {
    [super layoutSubviews];

    [_label sizeToFit];
    _gradient.frame = _label.frame;
}

- (void)setFontFamily:(NSString *)fontFamily {
    _label.font = [RCTFont updateFont:_label.font withFamily:fontFamily];
}

- (void)setFontSize:(NSNumber *)fontSize {
    _label.font = [RCTFont updateFont:_label.font withSize:fontSize];
}

- (void)setText:(NSString *)text {
    _label.text = text;
    [_label sizeToFit];
    [self reactSetFrame:_label.frame];
}

- (void)setColors:(NSArray *)colors {
    NSMutableArray *nativeColors = [NSMutableArray arrayWithCapacity:colors.count];

    for (NSString *colorString in colors) {
        [nativeColors addObject:(id) [RCTConvert UIColor:colorString].CGColor];
    }

    _gradient.colors = nativeColors;
}


- (void)setStartPoint:(CGPoint)startPoint {
    _gradient.startPoint = startPoint;
}


- (void)setEndPoint:(CGPoint)endPoint {
    _gradient.endPoint = endPoint;
}


- (void)setLocations:(NSArray *)locations {
    _gradient.locations = locations;
}

@end

