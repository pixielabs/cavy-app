---
id: reporting-to-ios-xctest-swift
title: Reporting to iOS XCTest (Swift)
sidebar_label: iOS XCTest (Swift)
---

To set up your own XCTestCase in Swift that makes use of cavy-native-reporter:

1. Follow the same steps as for [the Objective-C setup](reporting-to-ios-xctest-objective-c), but choose Swift when
prompted to choose a language.
2. Make sure that a Bridging Header file has also been created (Xcode will
usually prompt you to create one if this is your first Swift file in the
project).
3. Import `<CavyNativeReporter/CavyNativeReporter.h>` in your Bridging Header.
4. Write a test.

The following Swift code is equivalent to the Objective-C example:

```swift
import XCTest

class BridgeTest: XCTestCase {
  func testBridge() {
    let expectation = XCTestExpectation(description: "Cavy tests passed");

    CavyNativeReporter.onFinish { report in
      NSLog("%@", report);
      let errorCount = report["errorCount"] as! Int;
      if (errorCount > 0) {
        XCTFail("Cavy tests had one or more errors");
      }
      expectation.fulfill();
    }

    wait(for: [expectation], timeout: 5);
  }
}
```
### See also

#### API reference

* [`onFinish`](../api/cavy-native-reporter#onfinish-class-method)

#### Useful links for iOS Testing
- [Writing XCTest classes](https://developer.apple.com/library/archive/documentation/DeveloperTools/Conceptual/testing_with_xcode/chapters/04-writing_tests.html)
- [Running tests](https://developer.apple.com/library/archive/documentation/DeveloperTools/Conceptual/testing_with_xcode/chapters/05-running_tests.html#//apple_ref/doc/uid/TP40014132-CH5-SW1)
- [Overview of testing with XCTest](https://www.objc.io/issues/15-testing/xctest/)
