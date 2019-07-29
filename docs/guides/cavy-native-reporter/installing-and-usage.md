---
id: installing-and-usage
title: Using Cavy Native Reporter
sidebar_label: Using Cavy Native Reporter
---

[Cavy Native Reporter](https://github.com/pixielabs/cavy-native-reporter)
allows you to send your Cavy test results to native Android and iOS test runners.

By default Cavy reports a completed test run to [cavy-cli](getting-started/installing.md).
Cavy Native Reporter provides an alternative reporter for Cavy which fires
a Native Module callback when tests are finished. You can then wire this
in to a native test runner such as XCTest.

## When would I want to use Cavy Native Reporter?
You may want to do this if you already have some application tests that are
native, e.g. if you already use XCTest to test parts of your app. This could
be because not all of your app is React Native, or if your app makes heavy
use of native code. You may also want to use it if you have an existing
CI pipeline set up for running a native test framework, and don't want to
adapt it for Cavy & cavy-cli.

You probably don't need this if your app is purely a React Native app
and you have no existing native tests. You can probably just use cavy-cli
instead.

## Installing
To get started using Cavy with native reporting, install using `yarn`:

    yarn add cavy cavy-native-reporter --dev

or `npm`:

    npm i --save-dev cavy cavy-native-reporter

Then link the package:

    react-native link cavy-native-reporter

## Usage

Take a look at [the cavy-native-reporter sample app](https://github.com/pixielabs/cavy-native-reporter/tree/master/sampleApp) 
for a full example of how you may want to integrate cavy-native-reporter into
your native testing setup.

### 1. Set up Cavy

First off, follow the instructions in [Getting Started](getting-started/setting-cavy-up.md)
to set up a testing entry point for your app and write your tests.

### 2. Import and set up `CavyNativeReporter`

The module `CavyNativeReporter` has a method `reporter`, that takes the test report
and calls a callback function that you can define in your native tester code.

In your `index.test.js`, import `CavyNativeReporter` and set the Tester's `reporter`
prop to use the native reporter:

```jsx
// index.test.js

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './app';
import { Tester, TestHookStore } from 'cavy';
import IntegrationSpecs from './specs/IntegrationSpecs';

// Extra import for cavy-native-reporter:
import CavyNativeReporter from 'cavy-native-reporter';

const testHookStore = new TestHookStore();

class TestableApp extends Component {
  render() {
    return (
      <Tester specs={IntegrationSpecs}
        store={testHookStore}
        // Extra prop for cavy-native reporter:
        reporter={CavyNativeReporter.reporter}>
        <App/>
      </Tester>
    );
  }
}

AppRegistry.registerComponent('App', () => TestableApp);
```

This will override Cavy's default behaviour of sending test reports to cavy-cli,
allowing you to wire it up to your own native test runner instead.

### 3. Report to native tests

You're now ready to define where you'd like to send test reports to. You can
have a look at some examples of how to set this up here:

* [iOS XCTest (Objective C)](./reporting-to-ios-xctest-objective-c)
* [iOS XCTest (Swift)](./reporting-to-ios-xctest-swift)
* [Android](./reporting-to-android)

#### See also

* [CavyNativeReporter API](../../api/cavy-native-reporter)
