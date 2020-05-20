---
id: test-hooks
title: Test Hooks
---

Cavy interacts with elements through their refs, adding them to the TestHookStore
where they are stored as an array of references for later use in specs. Depending
on the component you are trying to test, there are several ways to add these
test hooks.

* [See the guides for hooking up components](../getting-started/hooking-up-components)

## Reference

### `generateTestHook(identifier, [ref])`

Returns the ref generating function that adds components to the TestHookStore.

* `identifier`: (`String`) Identifier for the component that is used in tests.
* `ref`: (`Function | RefObject`) Optional - your own ref generating function or
ref attribute created via `React.createRef()`.

---
### `useCavy()`

Cavy's custom React Hook that returns the `generateTestHook` function.

#### Example

```js
import { useCavy } from 'cavy';

export default ()  => {
  const generateTestHook = useCavy();
  return <input ref={ generateTestHook('Input') }/>
}
```

---
### `hook(wrappedComponent)`

Higher-order React component that makes `generateTestHook` available as a prop.
An alternative to `useCavy()`.

* `wrappedComponent` - React component to be wrapped.

#### Example

```js
import React from 'react';
import { hook } from 'cavy';

class Scene extends React.Component {
  render() {
    const { generateTestHook } = this.props;

    return (
      <TextInput
        ref={generateTestHook('Scene.TextInput', (c) => this.textInput = c)}
      />
      <Button
        ref={generateTestHook('Scene.Button')}
        title='Press me!'
      />
    );
  }
}

const TestableScene = hook(Scene);
export default TestableScene;
```

---
### `wrap(component)`

Higher order React component that makes non-testable components testable.

* `component` - The function component you want to test.

#### 1. Function components

`wrap` uses [`forwardRef`](https://reactjs.org/docs/forwarding-refs.html) and
[`useImperativeHandle`](https://reactjs.org/docs/hooks-reference.html#useimperativehandle)
to make a function component's props available via the ref so that Cavy can
interact with it during testing:

#### Example

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

#### 2. Native components like `<Text>`

`wrap` wraps a native component like `Text`, (which is neither a React Class nor
a Function Component), and returns a React Class with testable props.

#### Example

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

**Note:** If you only want to test the presence of a `<Text>` component, you do
not need to wrap it before assigning it a ref.
