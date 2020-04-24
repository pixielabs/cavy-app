---
id: writing-tests
title: Writing test cases
sidebar_label: Writing test cases
---

Once you have your components hooked up, you're ready to write some tests.

## Basic test structure

Cavy provides `describe` and `it` functions to write  and group your test
cases. The basic structure of your tests will be something like this:

```js
// specs/AppSpec.js

export default function(spec) {

  spec.describe('My feature', function() {
    spec.it('works', async function() {
      await spec.fillIn('Scene.TextInput', 'some string')
      await spec.press('Scene.button');
      await spec.exists('NextScene');
    });
  });
}
```

You reference your hooked-up components using the string you provided to
`generateTestHook` in the ref assigned to them.

## Setup

You can use `beforeEach` to call a function before each test runs. The
`beforeEach` function will be called after `AsyncStorage` is cleared but before
the app re-renders and the test is run. So the order of actions for each test
execution is:

1. AsyncStorage is cleared (if the `clearAsyncStorage` prop is set to true in
   `Tester`)
2. The `beforeEach` function is called (if defined for this test)
3. The app is re-rendered
4. The test is run

```js
// specs/AppSpec.js

export default function(spec) {

  spec.beforeEach(function() {
    // This will run before each test in this spec file.
  });

  spec.describe('My feature', function() {
    spec.it('works', async function() {
      await spec.fillIn('Scene.TextInput', 'some string')
      await spec.press('Scene.button');
      await spec.exists('NextScene');
    });
  });
}
```

#### See also

* [beforeEach reference](../api/helpers#beforeeachfunction)
* [Tester component API](../api/tester)

## The DSL

Cavy gives you a set of functions which you can use when writing your tests
to do the following:

* [Querying](#querying)
* [Interacting through touch](#interacting-through-touch)
* [Inputting text](#inputting-text)
* [Finding elements](#finding-elements)
* [Pausing](#pausing)

Below is an overview of what you can do with Cavy. See the [API](../api/helpers)
for a more comprehensive reference.


### Querying

Cavy gives you functions to query the existence, or absence, of elements in your app:

```js
await spec.exists('MenuItem');
await spec.notExists('OtherMenuItem');
```

### Interacting through touch

You can interact with elements that respond to `onPress`, such as Buttons or other
"Touchable" components:

```js
await spec.press('Button');
```

### Inputting text

You can enter text into TextInput components:

```js
await spec.fillIn('Input');
```

### Asserting text content

You can assert that a component (e.g. `<Text>`) contains a specified text string as a child.

```js
await spec.containsText('TextComponentID', 'string to be asserted');
```

### Focusing a component

You can focus a component that responds to the `onFocus` prop, such as `<TextInput />`.

```js
await spec.focus('TextInputID');
```

### Finding elements

You can find specific elements in order to interact with them:

```js
const link = await spec.findComponent('Scene.MyLink');
```


### Pausing

Cavy lets you pause between interactions, which can be useful if you need to wait
for a response before continuing:

```js
 await spec.pause(3000);
```

#### Reference

* [Helpers API](../api/helpers)
