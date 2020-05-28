---
id: test-hooks
title: Test Hooks
---

Cavy interacts with elements through their refs, storing them as 'test hooks' in
the `TestHookStore` so that they can be refered to in your specs. Depending on
the type of component you are testing, there are several ways to add these test
hooks.

If you haven't already, take a look at
[Hooking Up Components](../getting-started/hooking-up-components)
for detailed guidance on adding test hooks to your components.

## Reference

### `generateTestHook(identifier, [ref])`

Returns the ref generating function that adds components to the TestHookStore.

* `identifier`: (`String`) Identifier for the component you want to test.
* `ref`: (`Function | RefObject`) Optional - your own ref generating function or
  ref attribute created via `React.createRef()`.

---
### `useCavy()`

A custom React Hook that returns the `generateTestHook` function directly.

#### Example

```js
import { useCavy } from 'cavy';

export default ()  => {
  const generateTestHook = useCavy();
  return <input ref={ generateTestHook('Input') }/>
}
```

---
### `hook(component)`

Higher-order React component that makes `generateTestHook` available as a prop.
An alternative to `useCavy()`.

* `component` - The React component within which you want access to
`generateTestHook`.

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

* `component` - The function, or Native, component you want to test.

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
