---
id: test-helpers
title: Test Helpers
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

---

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

---

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

---

### `.findComponent(identifier)`

Finds a component using its test hook identifier. Waits `this.waitTime` for the
component to appear before abandoning.

Returns a Promise which resolves to the component itself.

This is useful for when you can't use one of Cavy's other helper functions to
interact with your component. Find it using `.findComponent` and call one of
the props yourself, or write your own assertion!

See [Guides - Writing your own spec helpers](/guides/writing-spec-helpers) for
an example of writing your own assertion.

* `identifier`: (`String`) Identifier for the component.

#### Example

```js
export default function(spec) {
  spec.describe('Navigating to an employee information page', function() {
    spec.it("shows the employee's phone number", async function() {
      await spec.press('EmployeeImage.AmyTaylor');
      const link = await spec.findComponent('Employee.InfoLink');
      link.props.onClick();
      await spec.exists('Employee.PhoneNumber');
    });
  });
}
```

---

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

---

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

---

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

## Assertions

### `.exists(identifier)`
Returns `true` if the component can be identified (i.e. is currently on screen).

* `identifier`: (`String`) Identifier for the component.

#### Example
```js
export default function(spec) {
  spec.describe('A list of the employees', function() {
    spec.it('can be filtered by search input', async function() {
      await spec.fillIn('SearchBar.TextInput', 'Amy');
      await spec.exists('EmployeeList.AmyTaylor');
    });
  });
}
```

---

### `.containsText(identifier, str)`
Returns `true` if the component contains the string as a child.

If your component is a React Native `<Text>` component, then you'll need to
`wrap` it first to make it testable. See
[the documentation for `wrap`](/api/test-hooks#2-native-components-like-text)
for an example.

* `identifier`: (`String`) Identifier for the component.
* `str`: (`String`) String is should contain.

#### Example

```js
export default function(spec) {
  spec.describe('Selecting an employee', function() {
    spec.it('shows their job title', async function() {
      await spec.press('EmployeeImage.AmyTaylor'); 
      await spec.containsText('Employee.JobTitle', 'CEO');
    });
  });
}
```

---

### `.notExists(identifier)`

Returns `true` if the component is absent from the screen.

* `identifier`: (`String`) Identifier for the component.

#### Example
```js
export default function(spec) {
  spec.describe('A list of the employees', function() {
    spec.it('can be filtered by search input', async function() {
      await spec.fillIn('SearchBar.TextInput', 'Amy');
      await spec.notExists('EmployeeList.JimCavy');
    });
  });
}
```
