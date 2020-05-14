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

#### Example

```js
export default function(spec) {
  spec.describe('My Scene', function() {
    // A group of test cases goes here
  });
}
```

### `.it(label, function)`

Defines a test case.

* `label`: (`String`) Label for the test case. This is combined with the label
from `describe` when Cavy outputs to the console.
* `function`: (`Function`) The test case.

#### Example

```js
export default function(spec) {
  spec.describe('My Scene', function() {
    spec.it('Has a component', async function() {
      await spec.exists('MyScene.MyComponent');
    });
  });
}
```

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

#### Example

```js
export default function(spec) {
  spec.describe('A list of employees', function() {
    spec.it('can be filtered by search input', async function() {
      await spec.fillIn('SearchBar.TextInput', 'Amy');
      await spec.exists('EmployeeList.AmyTaylor');
    });
  });
}
```

### `.focus(identifier)`
Focuses the identified component. Component must respond
to `onFocus`.

* `identifier`: (`String`) Identifier for the component.

#### Example

```js
export default function(spec) {
  spec.describe('Focusing on the new password field', function() {
    spec.it('reveals the password constraints', async function() {
      await spec.focus('Password.New');
      await spec.exists('Password.Constraints');
    });
  });
}
```

### `.press(identifier)`
Presses the identified component. Component must respond to `onPress`.

* `identifier`: (`String`) Identifier for the component.

#### Example

```js
export default function(spec) {
  spec.describe('Pressing the "Gallery" button', function() {
    spec.it('takes the user to the employee image gallery', async function() {
      await spec.press('Button.ToGallery');
      await spec.exists('Employees.ImageGallery');
    });
  });
}
```

### `.pause(time)`

Pauses the test for the given length of time in milliseconds. Useful if you need
to allow time for a response to be received before progressing.

* `time`: (`Number`) The amount of time to wait in milliseconds.

#### Example

```js
export default function(spec) {
  spec.describe('Selecting an employee', function() {
    spec.it('reveals the email button after of 1 second', async function() {
      await spec.press('EmployeeImage.AmyTaylor');
      await spec.pause(1000);
      await spec.exists('ActionBar.EmailButton');
    });
  });
}
```

### `.findComponent(identifier)`

Find a component by its test hook identifier. Waits `this.waitTime` for the
component to appear before abandoning. Returns a Promise.

Useful when your component doesn't respond to either `onChangeText` or `onPress`.

* `identifier`: (`String`) Component identifier registered in the test hook store
via `generateTestHook`.

#### Example

```js
export default function(spec) {
  import { hasButtonText } from './helpers';

  spec.describe('Navigating to an employee profile', function() {
    spec.it('reveals the email button with correct text', async function() {
      await spec.press('EmployeeImage.AmyTaylor');
      const button = await spec.findComponent('ActionBar.EmailButton');
      await hasButtonText(button, 'Email Amy');
    });
  });
}
```

## Assertions

### `.exists(identifier)`
Returns `true` if the component can be identified (i.e. is currently on screen).

* `identifier`: (`String`) Identifier for the component.

### `.notExists(identifier)`

Returns `true` if the component is absent from the screen.

* `identifier`: (`String`) Identifier for the component.

#### Example
```js
export default function(spec) {
  spec.describe('A list of the employees', function() {
    spec.it('can be filtered by search input', async function() {
      await spec.exists('EmployeeList.JimCavy');
      await spec.fillIn('SearchBar.TextInput', 'Amy');
      await spec.notExists('EmployeeList.JimCavy');
      await spec.exists('EmployeeList.AmyTaylor');
    });
  });
}
```
