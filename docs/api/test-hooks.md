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
### `hook(wrappedComponent)`

Higher-order React component that makes `generateTestHook` available as props to
the children of a component.

* `wrappedComponent` - React Component to be wrapped.

#### Example

```jsx
import { hook } from cavy;

class MyComponent extends React.Component {
  render() {
    const { generateTestHook } = this.props;

    return (
      <TextInput
        ref={generateTestHook('MyComponent.textinput', (c) => this.textInput = c)}
        ...
      />
      <Button
        ref={generateTestHook('MyComponent.button')}
        title='Press me!'
      />
    );
  }
}

const TestableMyComponent = hook(MyComponent);
export default TestableMyComponent;
```

---
### `wrap(functionComponent)`

Higher-order React component that wraps a function component using React's
[`forwardRef`](https://reactjs.org/docs/forwarding-refs.html) and
[`useImperativeHandle`](https://reactjs.org/docs/hooks-reference.html#useimperativehandle)
to make its properties available via the ref so that Cavy can interact with via
the TestHookStore.

* `functionComponent` - The function component you want to test.

#### Example

```jsx
import { Button } from 'react-native-elements';
import { hook, wrap } from 'cavy';

class MyComponent extends React.Component {
  // ...
  render() {
    const WrappedButton = wrap(Button);

    return (
      <WrappedButton ref={this.generateTestHook('button')} onPress={}/>
    )
  }
}
export default hook(MyComponent);
```

---
### `useCavy()`

Custom React Hook that returns a function that you can pass into an inner
component's ref to add that component to the TestHookStore.

#### Example

```jsx
import { useCavy } from 'cavy';

export default ()  => {
  const generateTestHook = useCavy();
  return <input ref={ generateTestHook('MyInput') }/>
}
```
