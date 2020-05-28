---
id: setting-cavy-up
title: Setting up the Cavy Tester
sidebar_label: Setting up the Cavy Tester
---

 * [I am using cavy-cli](#if-you-are-using-cavy-cli)
 * [I am not using cavy-cli](#if-you-are-not-using-cavy-cli)

## If you are using cavy-cli

Once you've installed cavy-cli and added Cavy to your project, you're ready to
get started. From within your React Native project, run:

    cavy init

This will create a `specs` folder with an example spec, and an `index.test.js`
file which Cavy will use to boot your app and run your tests.

Open `index.test.js` and modify it so that it imports your app and wraps it inside
the Cavy Tester component, e.g.:

```jsx
// index.test.js

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Tester, TestHookStore } from 'cavy';
import ExampleSpec from './specs/exampleSpec';
// Import your app
import App from './App';

const testHookStore = new TestHookStore();

class AppWrapper extends Component {
  render() {
    return (
      <Tester specs={[ExampleSpec]} store={testHookStore}>
        <App />
      </Tester>
    );
  }
}

// Remember to replace with your app name below!
AppRegistry.registerComponent('MyFirstCavy', () => AppWrapper);
```

### What does `index.test.js` do?

When you run tests, Cavy will swap out your app's `index.js` entry point for
`index.test.js`. This instantiates a new `TestHookStore`, which will store
references to the testable components registered in your app for Cavy to use,
and renders your app inside Cavy's Tester component so that the tests run on boot.

**NOTE:** Cavy assumes that your app entry point will be named `index.js`. If this is not
the case, see [Specifying a custom app entry point](../guides/specifing-a-custom-app-entry-point).

## If you are not using cavy-cli

Import the `Tester`, `TestHookStore` and your specs in your top-level JS file
(typically this is your `index.{ios,android}.js` files). Instantiate a new
`TestHookStore` and render your app inside a `<Tester>` component.

```jsx
// index.ios.js

import React, { Component } from 'react';
import { Tester, TestHookStore } from 'cavy';
import ExampleSpec from './specs/exampleSpec';
import App from './app';

const testHookStore = new TestHookStore();

export default class AppWrapper extends Component {
  render() {
    return (
      <Tester specs={[ExampleSpec]} store={testHookStore}>
        <App />
      </Tester>
    );
  }
}
```

#### Options for configuring your Tester component

* [Tester component API](../api/tester)

