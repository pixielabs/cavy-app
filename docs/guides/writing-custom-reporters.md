---
id: writing-custom-reporters
title: Writing your own custom reporter
sidebar_label: Writing your own custom reporter
---

If you don't want to use [cavy-cli](getting-started/installing.md) to handle your tests results, you can pass in your own custom reporter.

By default, Cavy will send a test report to cavy-cli if it detects it is running.
However, passing your own custom reporter function as a prop into the Tester
component overrides this functionality - Cavy will call your function with the
test report as an argument instead of sending the results to cavy-cli.

```jsx
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './app';
import { Tester, TestHookStore } from 'cavy';
import IntegrationSpecs from './specs/IntegrationSpecs';

// Extra import for your-custom-reporter:
import YourCustomReporter from 'your-custom-reporter';

const testHookStore = new TestHookStore();

class TestableApp extends Component {
  render() {
    return (
      <Tester specs={IntegrationSpecs}
        store={testHookStore}
        // Pass your reporter into the Tester component
        // with the `reporter` prop:
        reporter={YourCustomReporter.reporter}>
        <App/>
      </Tester>
    );
  }
}

AppRegistry.registerComponent('App', () => TestableApp);
```

For a real example of a custom test reporter, check out Cavy Native Reporter,
which reports test results to native Android or iOS test runners:

* [Installing & using Cavy Native Reporter](../cavy-native-reporter/installing)
* [Cavy Native Reporter on GitHub](https://github.com/pixielabs/cavy-native-reporter)
