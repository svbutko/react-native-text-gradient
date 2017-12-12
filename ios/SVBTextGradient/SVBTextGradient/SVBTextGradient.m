#import "SVBTextGradient.h"

@implementation SVBTextGradient {

@private
    UILabel *_label;
    CAGradientLayer *_gradient;
}

- (instancetype)init {
    self = [super init];
    if (self) {
        _gradient = [[CAGradientLayer alloc] init];
        _gradient.colors = [NSArray arrayWithObjects:(id) [UIColor redColor].CGColor, (id) [UIColor yellowColor].CGColor, nil];
        _gradient.startPoint = CGPointMake(0, 0.5);
        _gradient.endPoint = CGPointMake(1, 0.5);
        [self.layer addSublayer:_gradient];
        _label = [[UILabel alloc] init];
        _label.text = @"Some";
        _label.font = [UIFont systemFontOfSize:40];
        [self addSubview:_label];
        self.maskView = _label;
    }

    return self;
}

- (void)layoutSubviews {
    [super layoutSubviews];

    _gradient.frame = self.bounds;
    _label.frame = self.bounds;
}


@end

