---
id: helpers
title: Helpers
---

Cavy provides a set of helpers for writing your test cases and interacting with
your React Native app.

## Basic Test Structure 

### `.describe(label, function)`
Creates a block that groups together several related test cases.

* `label`: (`String`) Label for the test cases.
* `function`: (`Function`) Callback function containing your test cases.

### `.it(label, function)`

Defines a test case.

* `label`: (`String`) Label for the test case. This is combined with the label
from `describe` when Cavy outputs to the console.
* `function`: (`Function`) The test case.

### `.beforeEach(function)`
Runs a function before each test case. This function is called after Cavy
clears `AsyncStorage`, but before the app is re-rendered. This means you can
use `beforeEach` to manipulate state before the app is re-rendered.

* `function`: (`Function`) The function to run before the tests.

#### Example
```js
export default function(spec) {
  spec.describe('My Scene', function() {
    spec.beforeEach(() => {
      doThisThingFirst();
    });

    spec.it('Has a component', async function() {
      await spec.exists('MyScene.MyComponent');
    });
  });
}
```



## Actions

### `.fillIn(identifier, str)`
Fills in the identified component with the string provided. Component must respond
to `onChangeText`.

* `identifier`: (`String`) Identifier for the component.
* `str`: (`String`) String to fill in.

### `.focus(identifier)`
Focuses the identified component. Component must respond
to `onFocus`.

* `identifier`: (`String`) Identifier for the component.

### `.press(identifier)`
Presses the identified component. Component must respond to `onPress`.

* `identifier`: (`String`) Identifier for the component.

### `.pause(time)`

Pauses the test for the given length of time in milliseconds. Useful if you need
to allow time for a response to be received before progressing.

* `time`: (`Number`) The amount of time to wait in milliseconds.

### `.findComponent(identifier)`

Find a component by its test hook identifier. Waits `this.waitTime` for the
component to appear before abandoning. Returns a Promise.

Useful when your component doesn't respond to either `onChangeText` or `onPress`.

* `identifier`: (`String`) Component identifier registered in the test hook store
via `generateTestHook`.

#### Example

```js
const picker = await spec.findComponent('Scene.modalPicker');
picker.open();
```

## Assertions

### `.exists(identifier)`
Returns `true` if the component can be identified (i.e. is currently on screen).

* `identifier`: (`String`) Identifier for the component.

### `.notExists(identifier)`

Returns `true` if the component is absent from the screen.

* `identifier`: (`String`) Identifier for the component.

