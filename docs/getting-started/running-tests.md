---
id: running-tests
title: Running tests
sidebar_label: Running tests
---

By now you should have Cavy installed, the `<Tester>` set up, your testable
components hooked up, _and_ your test cases written!

## Importing your specs

The final step before you can run your tests is to import them and pass them
into the `<Tester>`.

Open `index.test.js` (or your application entry file for non-cli users), import
your tests, and replace the `ExampleSpec` in the Tester's `specs` prop with
your specs:

```jsx
// index.test.js or your app entry point.

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Tester, TestHookStore } from 'cavy';
import App from './App';

// Import your specs
import AppSpec from './specs/AppSpec';
import AnotherSpec from './specs/AnotherSpec';

const testHookStore = new TestHookStore();

class AppWrapper extends Component {
  render() {
    return (
      <Tester specs={[AppSpec, AnotherSpec]} store={testHookStore}>
        <App />
      </Tester>
    );
  }
}

// Remember to replace with your app name below!
AppRegistry.registerComponent('MyFirstCavy', () => AppWrapper);
```

The `specs` prop takes an Array, so you can pass in more than one spec if you
need to.

## Running tests with cavy-cli

Congratulations! You are now all set up to start testing your app with Cavy.

To run the tests, type the following into the command line:

```bash
# To test on iOS
cavy run-ios

# To test on Android
cavy run-android
```

This will boot your app, run the tests and output the results to the console.

For a full list of cavy-cli options, see the [API reference](../api/commands).

#### Note on running tests via cavy-cli

* Under the hood, cavy-cli calls react-native-cli commands. This means you can
  pass in any react-native-cli options that are valid for either
  `react-native run-ios` or `react-native run-android`. [See the full reference
  for more on Cavy commands](../api/commands).

* If you're not using `index.js` as your app entry point, you'll need to specify
  the entry point Cavy should use.
  [See the guide for custom entry points](../guides/specifing-a-custom-app-entry-point).

## Running tests with cavy-cli and Expo

If you're using Expo, `cavy run-ios` or `cavy run-android` will fail to
successfully build your app.

Build your app separately and run your tests using:

```bash
# To test on iOS
cavy run-ios --skipbuild

# To test on Android
cavy run-android --skipbuild
```

Passing in the `--skipbuild` option means that cavy-cli will assume your
app is already running, and will wait for your test results.

## Running tests without cavy-cli

If you've been following along without cavy-cli, your tests will just
automatically run when you boot your app. It's down to you to decide how to
control this within your app so that they only run when you want them to.

You could try [swapping your app to use cavy-cli](../getting-started/setting-cavy-up#if-you-are-using-cavy-cli)
or finding some way to configure your app to not mount a Cavy `<Tester>`
component during boot.

#### Find out more about the CLI

 * [CLI commands reference](../api/commands#cavy-run-ios)
