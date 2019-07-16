---
id: specifing-a-custom-app-entry-point
title: Specifing a custom app entry point
sidebar_label: Specifing a custom app entry point
---

By default, Cavy looks for an `index.js` entry point in your React Native project.
Running `cavy init` will generate a corresponding `index.test.js` file,
which is used to make sure that your tests only run
when booting your app via Cavy.

## Setting up a custom entry point

If your app uses a different entry point, you will need to rename the
automatically generated `index.test.js` file so that it is the same as your
entry point, but suffixed with `.test.js`. For example, if your app entry point
is `index.ios.js`, your test entry point should be called `index.ios.test.js`.

## Running tests

To run your tests with a custom app entry point, run the test commands with the
`--file` flag, followed by the filename as a string. For example:

```bash
cavy run-ios --file index.ios.js
```

If you're using any extra React Native CLI options, make sure to include them 
_after_ the cavy-cli `--file` flag.