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
    _container.frame = CGRectMake(0, 0, 320, 100);
    
    return _container;
}

RCT_EXPORT_VIEW_PROPERTY(text, NSString);
RCT_EXPORT_VIEW_PROPERTY(fontFamily, NSString);
RCT_EXPORT_VIEW_PROPERTY(fontSize, NSNumber);
RCT_EXPORT_VIEW_PROPERTY(colors, NSArray);
RCT_EXPORT_VIEW_PROPERTY(startPoint, CGPoint);
RCT_EXPORT_VIEW_PROPERTY(endPoint, CGPoint);
RCT_EXPORT_VIEW_PROPERTY(locations, NSArray);

@end
