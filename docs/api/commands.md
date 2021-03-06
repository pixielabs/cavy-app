---
id: commands
title: CLI Commands
---

These commands make testing your app easier and are available with cavy-cli.

* [See installation instructions](../getting-started/installing)
* [View on GitHub](https://github.com/pixielabs/cavy-cli)

## Reference

### `cavy init`

```bash
cavy init [<specFolderName>]
```

Set up testing with Cavy within your React Native project. Creates a `specs`
folder with an example spec in it, and an `index.test.js` file, from which Cavy
will boot your app and run your specs.

* `<specFolderName>`: The directory in which you'd like to keep your
spec files. Defaults to `specs`.

---

### `cavy run-ios`

```bash
cavy run-ios [options] [rn-options]
```

Run tests on iOS.

`options`:

| Option (long)              | Option (short) | Description     |
|----------------------------|----------------|-----------------|
| `--boot-timeout <minutes>` | `-t`           | Set how long to wait for the app to boot (is ignored if used with `--skipbuild`, defaults to 2 minutes, requires Cavy 4.0.0) |
| `--dev`                    | `-d`           | Start the test server and keep it running until manually killed. For use with hot-reloading. |
| `--file <file>`            | `-f`           | Specify the app entry point. By default, Cavy looks for an `index.js`. |
| `--skipbuild`              | `-s`           | Start the test server and listen for results without first building the app. Assumes your app is already running. |
| `--xml`                    |                | Write the test results to `cavy_results.xml`, conforming to JUnit XML specification. (This option requires Cavy >=3.3.0) |

`rn-options`:
* Any [react-native-cli](https://www.npmjs.com/package/react-native-cli) options that are valid for `react-native run-ios`.

#### Examples

Set `index.ios.js` as the entry point:

```bash
cavy run-ios -f index.ios.js
```

Set a custom entry point and specify a device (see [React Native: Running On
Simulator](https://reactnative.dev/docs/running-on-simulator-ios)):
```bash
cavy run-ios -f index.ios.js --simulator="iPhone 8"
```

Run Cavy tests in dev mode having built and started your app manually:

```bash
cavy run-ios -d -s
```

#### Expo and cavy-cli
By default, cavy-cli attempts to build and run your app using
`react-native run-ios` under the hood. If you're using Expo this won't work!
You'll have to manually build your app yourself and run your tests using the
`--skipbuild` option.

---

### `cavy run-android`

```bash
cavy run-android [options] [rn-options]
```

Run tests on Android.

Options are the same as for `cavy run-ios`.

---

### Exit codes

cavy-cli will exit with one the following codes:

| Code  | Reason                                                                                                          |
|-------|-----------------------------------------------------------------------------------------------------------------|
| 0     | Your app built successfully and all your tests passed                                                           |
| 1     | Your app failed to build and no tests were run                                                                  |
| 42    | Your app built successfully but one or more of your tests failed                                                |
| other | If react-native-cli exits with any other code during the app build phase, cavy-cli will exit with the same code |