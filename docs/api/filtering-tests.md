---
id: filtering-tests
title: Filtering tests
---

You can restrict which tests are run by 'tagging' them. You might want to do
this if you're working on a particular app scene or user-flow.

## Tag your tests

To tag an individual test, pass your tag as the third argument to your `spec.it`
function. Here we're using the tag 'focus':

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

You can also tag whole groups of tests, by passing your tag into
`spec.describe`:

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

**Note:** if you tag a whole `spec.describe` function, Cavy will ignore any tags
applied to individual tests it contains. The group tag takes precedent and is
applied to all individual tests in that group.

## Run your tests

Specify which tests you want to run in your `<Tester>` component, using the
`only` prop:

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

Then run your tests as normal! In this example, only tests tagged with 'focus'
will run.

You can include multiple tags in the `only` array and Cavy will only run those
tests tagged with any of the included tags.