---
id: reporting-to-ios-xctest-objective-c
title: Reporting to iOS XCTest (Objective C)
sidebar_label: iOS XCTest (Objective C)
---

To set up your own XCTestCase that makes use of `cavy-native-reporter`:
1. Open your project's `.xcodeproj` (or `.xcworkspace`) in Xcode.
2. In the Project navigator view, navigate to the folder containing your XCTest
test cases.
3. Create a new test case (select New File -> Unit Test Case Class).
4. Import `<CavyNativeReporter/CavyNativeReporter.h>`
5. Write a test.

Taking the sample app as an example, we have an XCTestCase `BridgeTest` which
waits for Cavy tests to run and fails if any test returns an error:

```objc
#import <XCTest/XCTest.h>
#import <CavyNativeReporter/CavyNativeReporter.h>

@interface BridgeTest : XCTestCase

@end

@implementation BridgeTest

- (void)testBridge {
  // Make a new expectation.
  XCTestExpectation *expectation = [[XCTestExpectation alloc] initWithDescription: @"Cavy tests passed"];

  [CavyNativeReporter onFinishWithBlock: ^void(NSDictionary* report) {
    // Pull the error count from the report object.
    long errorCount = [report[@"errorCount"] integerValue];
    // Fail if there are errors.
    if (errorCount > 0) {
      XCTFail(@"Cavy tests had one or more errors");
    }
    // Fulfill the expectation.
    [expectation fulfill];
  }];

  // Wait for expectation to fulfill.
  [self waitForExpectations:@[expectation] timeout:100];
}

@end
```

### See also

#### API reference

* [`onFinishWithBlock`](../api/cavy-native-reporter#onfinishwithblock-class-method)

#### Useful links for iOS Testing
- [Writing XCTest classes](https://developer.apple.com/library/archive/documentation/DeveloperTools/Conceptual/testing_with_xcode/chapters/04-writing_tests.html)
- [Running tests](https://developer.apple.com/library/archive/documentation/DeveloperTools/Conceptual/testing_with_xcode/chapters/05-running_tests.html#//apple_ref/doc/uid/TP40014132-CH5-SW1)
- [Overview of testing with XCTest](https://www.objc.io/issues/15-testing/xctest/)
