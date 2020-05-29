---
id: filtering-tests
title: Filtering tests
---

You can restrict which tests are run by 'tagging' them. You might want to do
this if you're working on a particular app scene or user-flow.

## Tagging individual tests

1. Pass your test tag as the third argument to your `spec.it` function. Here we're
  using the tag 'focus':

```js
// specs/MyFeatureSpec.js

export default function(spec) {
  spec.describe('My feature', function() {
    spec.it('works', async function() {
      await spec.press('Scene.button');
      await spec.exists('NextScene');
    }, 'focus');
  });
}
```

2. Specify which tagged tests you want to run in your `<Tester>` components, using
  the `only` array prop:


```jsx
// index.test.js
import { Tester, TestHookStore } from 'cavy';

import MyFeatureSpec from './specs/MyFeatureSpec';
import App from './App';

const testHookStore = new TestHookStore();

export default class AppWrapper extends React.Component {
  render() {
    return (
      <Tester
        specs={[MyFeatureSpec]}
        store={testHookStore}
        only={['focus']}
      >
        <App />
      </Tester>
    );
  }
}
```

The most common use-case is using one 'focus' style tag, to run either an
individual test case, or a group of tests. However, you might want to organise
your tests using multiple tags.

The `only` props takes an array of tags for this purpose.

3. Run your tests as normal! Only tests tagged with 'focus' will run.

## Tagging groups of tests

This works in the same way as tagging individual tests, but instead of tagging
your `spec.it` function, you tag your `spec.describe` function:

```js
// specs/MyFeatureSpec.js

export default function(spec) {
  spec.describe('My feature', function() {
    spec.it('works', async function() {
      await spec.press('Scene.button');
      await spec.exists('NextScene');
    });
  }, 'focus');
}
```

Note: if you tag a whole `spec.describe` function, Cavy will ignore any tags
applied to individual tests it contains. The `spec.describe` tag takes
precedent and is applied to all individual tests within that block.