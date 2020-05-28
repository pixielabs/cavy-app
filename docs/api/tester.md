---
id: tester
title: Tester Component
sidebar_label: Tester Component
---

As per the instructions in
[Setting up the Cavy Tester](getting-starts/setting-cavy-up), your app should be
wrapped inside a `<Tester>` component within `index.test.js`. This creates a
testable version of your app!

As well as the required `specs` and `store`, there are a number of optional
props you can pass into the `<Tester>` to change the way Cavy runs test. These
are detailed below:

## Props

| Name | Type | Description | Default |
| :------------ |:---------------| :--------------- | :--------------- |
| `specs` (required) | `Array` | Your spec functions | - |
| `store` (required) | `TestHookStore` | A store of references to UI components in your app | - |
| `reporter` | `Function` | Called once all tests have finished. Takes the test report as an argument. If undefined, Cavy will send a test report to cavy-cli if it is running. | `undefined` |
| `waitTime` | `Integer` | Time in milliseconds that your tests should wait to find a component | `2000` |
| `startDelay` | `Integer` | Time in milliseconds before test execution begins | `0` |
| `clearAsyncStorage` | `Boolean` | If true, clears `AsyncStorage` between each test e.g. to remove a logged in user | `false` |

## Example

```jsx
// index.test.js
import { Tester, TestHookStore } from 'cavy';

import MyFeatureSpec from './specs/MyFeatureSpec';
import OtherFeatureSpec from './specs/OtherFeatureSpec';
import App from './App';

const testHookStore = new TestHookStore();

export default class AppWrapper extends React.Component {
  render() {
    return (
      <Tester
        specs={[MyFeatureSpec, OtherFeatureSpec]}
        store={testHookStore}
      >
        <App />
      </Tester>
    );
  }
}
```
