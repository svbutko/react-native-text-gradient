#import "SVBTextGradientManager.h"
#import "SVBTextGradient.h"
#import <React/RCTViewManager.h>

@implementation SVBTextGradientManager {

@private
    SVBTextGradient *_container;
}

RCT_EXPORT_MODULE()

- (UIView *)view {
    _container = [[SVBTextGradient alloc] init];

    return _container;
}

@end
