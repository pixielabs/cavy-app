---
id: writing-spec-helpers
title: Writing your own spec helpers
sidebar_label: Writing your own spec helpers
---

If you'd like to test something that's not included in the [Cavy helpers](../api/helpers),
you can write your own spec helper function.

Your function will need to be **asynchronous** and should **throw an error** in
situations where you want the test to fail.


For example, the following tests whether a `<Button>` component is disabled:

```js
// specs/helpers.js

export async function isDisabled(button) {
  if (!button.props.disabled) {
    throw new Error(`Button not disabled.`);
  };
}
```

Then in your spec, you can import your helper and pass in the component using
`findComponent()`:

```js
// specs/AppSpec.js

import { isDisabled } from './helpers';

export default function(spec) {
  spec.describe('The button', function() {
    spec.it('is disabled', async function() {
      const button = await spec.findComponent('Scene.Button');
      // Use your spec helper to test that the button is disabled
      await isDisabled(button);
    });
  });
}
```
