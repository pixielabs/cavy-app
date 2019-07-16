---
id: hooking-up-components
title: Hooking up components 
sidebar_label: Hooking up components
---

There are two parts to writing Cavy tests: registering the components you'd like
to test so that the Cavy Tester knows about them, and writing the
test cases.

In this section, we'll cover using Cavy's `generateTestHook` function to
register the components you want to interact with in your tests.

## How does this work?

Cavy uses [React ref generating functions](https://reactjs.org/docs/refs-and-the-dom.html).
We'll pass our components a ref using `generateTestHook`, which returns the
ref generating function that adds components to the TestHookStore, making them
available to us in our specs.

`generateTestHook` takes a string as an argument, which is the identifier
we'll use in our tests to reference the component. It can be anything you
like - make sure to use something that is easy to understand to keep your tests
readable!

There are three ways of getting access to `generateTestHook`:

* [`useCavy()` React Hook](#usecavy-react-hook) - the modern approach
* [Cavy's `hook` function](#using-cavy-s-hook-function) - the older approach
* [Cavy's `wrap` function](#using-cavy-s-wrap-function) - when you want to
  interact with a function component you don't control.

### `useCavy()` React Hook

If you're using React Hooks and would like to test a function component, you can
call the custom `useCavy()` React Hook to obtain the `generateTestHook` function
that you can pass to inner components' refs:

```jsx
// src/components/MyComponent.js

import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

import { useCavy } from 'cavy';

export default () => {
  const generateTestHook = useCavy();

  return (
    <View>
      <TextInput
        ref={generateTestHook('MyComponent.TextInput')}
        onChangeText={...}
      />
    </View>   
  )
};
```

### Using Cavy's `hook` function

Cavy provides a `hook` function which makes `generateTestHook` available as props.
You'll need to import the `hook` function, add a ref using the `generateTestHook`
function, then export a hooked version of the parent component:

```jsx
// src/Scene.js

import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { hook } from 'cavy';

class Scene extends Component {
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

### Using Cavy's `wrap` function

If you'd like to test a function component to which you can't assign a ref,
for example if you're importing a third-party function component, create
a testable version of it using the `wrap` function, then assign it a ref using
`generateTestHook` as normal.

```jsx
// src/Scene.js

import React, { Component } from 'react';
import { View } from 'react-native';
import { FunctionComponent } from 'some-ui-library';
import { hook, wrap } from 'cavy';

class Scene extends Component {
  render() {
    // Wrap a function component to which you can't assign a ref so that
    // you can test it with Cavy.
    const TestableFunctionComponent = wrap(FunctionComponent);

    return (
      <View>
        <TestableFunctionComponent
          ref={this.props.generateTestHook('Scene.FunctionComponent')}
          otherProp={...}
        />
      </View>      
    );
  }
}

// You need to wrap the Scene component in Cavy's `hook` function to make
// `generateTestHook` available to it.
const TestableScene = hook(Scene);
export default TestableScene;
```

#### See also

* [`generateTestHook`](../api/test-hooks#generatetesthookidentifier-func)
* [`hook`](../api/test-hooks#hookwrappedcomponent)
* [`wrap`](../api/test-hooks#wrapfunctioncomponent)
* [`useCavy`](../api/test-hooks#usecavy)
