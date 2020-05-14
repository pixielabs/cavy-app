---
id: tester
title: Tester Component
sidebar_label: Tester Component
---

Wraps your entire app to run tests against that app, interacting
with registered components in your test cases via the Cavy [helpers](helpers).

```jsx
import { Tester } from 'cavy';
```

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
