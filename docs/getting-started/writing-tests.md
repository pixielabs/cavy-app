---
id: writing-tests
title: Writing test cases
sidebar_label: Writing test cases
---

Once you have your components hooked up, you're ready to write some tests!

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

Reference your hooked-up components using the string you provided to
`generateTestHook`.

## Test helpers

Cavy provides a set of functions you can use when writing your tests to interact
with your components and manipulate your app.

See the [Test Helper API reference](../api/test-helpers) for a comprehensive
list of functions available.

Can't find something you need? Write your own test helper function! See
[Guides - Writing your own spec helpers](/guides/writing-spec-helpers) for
an example of writing your own assertions.

## Test execution

You can use `beforeEach` to call a function before each test runs. The
`beforeEach` function will be called after `AsyncStorage` is cleared but before
the app re-renders and the test is run.

The order of actions for each test execution is:

1. AsyncStorage is cleared (if the `clearAsyncStorage` prop is set to true in
   `Tester`)
2. The `beforeEach` function is called
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
* [Test Helpers API](../api/test-helpers)
* [beforeEach reference](../api/test-helpers#beforeeachfunction)
* [Tester component API](../api/tester)