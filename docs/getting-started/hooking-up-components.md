---
id: hooking-up-components
title: Hooking up components
sidebar_label: Hooking up components
---

There are two parts to writing Cavy tests: registering the components you'd like
to test so that Cavy knows about them, and writing the test cases.

In this section, we'll cover using Cavy's `generateTestHook` function to
hook up the components you want to interact with in your tests.

## How does this work?

Cavy uses [React ref generating functions](https://reactjs.org/docs/refs-and-the-dom.html).
We'll pass our components a ref using `generateTestHook`, which returns the
ref generating function that adds components to the `TestHookStore`, making them
available to us in our specs.

`generateTestHook` takes a string as an argument, which is the identifier
we'll use in our tests to reference the component. It can be anything you
like - make sure to use something that is easy to understand to keep your tests
readable!

There are two ways of getting access to `generateTestHook`:

* using [`useCavy()` React Hook](#usecavy-react-hook) - the modern approach
* using [`hook()` function](#hook-function) - the older approach

For testing function components that cannot be assigned a ref directly, you can
use Cavy's [`wrap` function](#wrap-function) to create testable versions of
these components. You will also need to `wrap` native components like `Text`.

### `useCavy()` React Hook

If you're using React Hooks, you can call the custom `useCavy()` React Hook to
obtain the `generateTestHook` function and assign a ref to the component you
want to test:

```js
import { View, TextInput } from 'react-native';
import { useCavy } from 'cavy';

export default () => {
  const generateTestHook = useCavy();

  return (
    <View>
      <TextInput
        ref={generateTestHook('Scene.TextInput')}
        onChangeText={...}
      />
    </View>   
  )
};
```

### `hook()` function

Cavy also provides a `hook` function which makes `generateTestHook` available as
in props. As assign a red to the component you want to test and then export a
hooked version of your parent component:

```js
import React from 'react';
import { View, TextInput } from 'react-native';
import { hook } from 'cavy';

class Scene extends React.Component {
  render() {
    return (
      <View>
        <TextInput
          ref={this.props.generateTestHook('Scene.TextInput')}
          onChangeText={...}
        />
      </View>      
    );
  }
}

const TestableScene = hook(Scene);
export default TestableScene;
```

### `wrap()` function

You can use Cavy's `wrap` function to achieve two things:

#### 1. Testing function components

If you'd like to test a function component to which you can't assign a ref (for
example if you're importing a third-party function component), create a testable
version of it using the `wrap` function, then assign it a ref as normal using
`generateTestHook`:

```js
import { FunctionComponent } from 'some-ui-library';
import { useCavy, wrap } from 'cavy';

export default () => {
  const generateTestHook = useCavy();
  const TestableFunctionComponent = wrap(FunctionComponent);

  return (
    <TestableFunctionComponent
      ref={generateTestHook('Scene.FunctionComponent')}
    />   
  )
};
```

#### 2. Testing native components like `<Text>`

If you want to test a `<Text>` component using the `containsText` helper method,
or by accessing it's props directly, **you must wrap the Text component
itself**:

```js
import { Text } from 'react-native';
import { useCavy, wrap } from 'cavy';

export default () => {
  const generateTestHook = useCavy();
  const TestableText = wrap(Text);

  return (
    <TestableText
      ref={generateTestHook('Scene.Text')}
    />   
  )
};
```

If you assign a ref directly to `<Text>`, the component returned does not expose
the props and you will not be able to test the children it renders.

**Note:** If you only want to test the presence of a `<Text>` component, you do
not need to wrap it before assigning it a ref.

#### See also

* [`generateTestHook`](../api/test-hooks#generatetesthookidentifier-func)
* [`hook`](../api/test-hooks#hookwrappedcomponent)
* [`wrap`](../api/test-hooks#wrapcomponent)
* [`useCavy`](../api/test-hooks#usecavy)
