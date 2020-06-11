---
id: cavy-native-reporter
title: Cavy Native Reporter
sidebar_label: Cavy Native Reporter
---

A reporter that sends test results to native Android or iOS test runners.

* [See installation & usage instructions](../guides/cavy-native-reporter/installing-and-usage)
* [View GitHub repo](https://github.com/pixielabs/cavy-native-reporter)

## Reference

### `CavyNativeReporter`

The Cavy Native Reporter module.

```jsx
import CavyNativeReporter from 'cavy-native-reporter';
```

### `CavyNativeReporter.reporter`

Takes the test report and fires a Native Module callback when tests are finished. 
You can define the callback function in your native tester code.

Pass this in to the [Tester component](./tester) as its `reporter` props to
override the default Cavy reporter.

## iOS - Objective-C

### `onFinishWithBlock` (class method)

Calls the block with the report if report is available (i.e. if Cavy tests have
finished).
If not, sets the callback as a class variable so we can access it later.

The `report` argument passed to the block is an `NSDictionary` with the following
structure:

```obj-c
{
  duration = "0.2";
  errorCount = 0;
  results = (
    {
      message = "Test suite description: test number 1";
      passed = 1;
    },
    {
      message = "Test suite description: test number 2";
      passed = 0;
    }
  );
}
```

If you need to, you can iterate over the test results and log more detailed
messages.

## iOS - Swift

### `onFinish` (class method)

Calls the block with the report if report is available (i.e. if Cavy tests have
finished).
If not, sets the callback as a class variable so we can access it later.

* `block` - a callback function.

## Android

### `waitForReport(seconds)`

Wait for a test report to be available from Cavy using a CountDownLatch.

* `seconds` - (`integer`) The number of seconds the latch should wait for
the report from Cavy before timing out.

### `cavyReport`

Static member variable used to access the test report from Cavy.
