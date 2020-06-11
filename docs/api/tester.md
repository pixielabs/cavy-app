---
id: tester
title: Tester Component
sidebar_label: Tester Component
---

As detailed in [Setting up the Cavy Tester](/docs/getting-started/setting-cavy-up),
your app should be wrapped inside a `<Tester>` component within `index.test.js`
(or your app entry point). This creates a testable version of your app!

As well as the required `specs` and `store`, there are a number of optional
props you can pass into the `<Tester>` to change the way Cavy runs tests. These
are detailed below:

## Props

| Name | Type | Description | Default |
| :------------ |:---------------| :--------------- | :--------------- |
| `specs` (required) | `Array(Function)` | An array of your spec functions | - |
| `store` (required) | `TestHookStore` | A store of references to UI components in your app | - |
| `clearAsyncStorage` | `Boolean` | If true, clears `AsyncStorage` between each test e.g. to remove a logged in user | `false` |
| `only` | `Array(String)` | An array of the test tags you'd like to include in the test run. If `null`, all tests are run. See [Filtering tests](filtering-tests) for examples. | `null` |
| `reporter` | `Function` | Called once all tests have finished. Takes the test report as an argument. If undefined, Cavy will send a test report to cavy-cli if it is running. | `undefined` |
| `startDelay` | `Integer` | Time in milliseconds before test execution begins | `0` |
| `waitTime` | `Integer` | Time in milliseconds that your tests should wait to find a component | `2000` |

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
        clearAsyncStorage={true}
        only={['focus']}
        startDelay={5000}
        waitTime={5000}
      >
        <App />
      </Tester>
    );
  }
}
```
