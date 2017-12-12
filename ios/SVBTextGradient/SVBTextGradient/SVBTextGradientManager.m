#import "SVBTextGradientManager.h"
#import <React/RCTViewManager.h>

@implementation SVBTextGradientManager

RCT_EXPORT_MODULE()

- (UIView *) view
{
    UILabel *label = [[UILabel alloc] init];
    label.text = @"Sample";
    label.textColor = [UIColor redColor];
    label.backgroundColor = [UIColor clearColor];
    return label;
}

@end
