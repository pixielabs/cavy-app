---
id: writing-spec-helpers
title: Writing your own spec helpers
sidebar_label: Writing your own spec helpers
---

If you'd like to test something that's not included in the [Cavy helpers](../api/helpers),
you can write your own spec helper function.

Your function will need to be **asynchronous** and should **throw an error** in
situations where you want the test to fail.


For example, the following tests whether a `<Text>` component displays the
correct text:

```js
// specs/helpers.js

export async function containsText(component, text) {
  if (!component.props.children.includes(text)) {
    throw new Error(`Could not find text ${text}`);
  };
}
```

Then in your spec, you can import your helper and use it as you would any
other helper:


```js
// specs/AppSpec.js

// Import your spec helper
import { containsText } from './helpers';

export default function(spec) {
  spec.describe('Changing the text', function() {
    spec.it('works', async function() {
      await spec.press('Scene.button');
      const text = await spec.findComponent('Scene.text');
      // Use your spec helper to test that the correct text is displayed
      await containsText(text, 'you pressed the button');
    });
  });
}
```
