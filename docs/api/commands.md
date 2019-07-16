---
id: commands
title: CLI Commands
---

Available with cavy-cli.

* [See installation instructions](../getting-started/installing)
* [View on GitHub](https://github.com/pixielabs/cavy-cli)

## Reference

### `cavy-init`

```bash
cavy init [<specFolderName>]
```

Set up testing with Cavy within your React Native project. Creates a `specs`
folder with an example spec in it, and an `index.test.js` file, from which Cavy
will boot your app and run your specs.

* `<specFolderName>`: The directory in which you'd like to keep your
spec files. Defaults to `specs`.

---

### `cavy-run-ios`

```bash
cavy run-ios [--file <filename>] [options]
```

Run tests in iOS. Calls `react-native run-ios` under the hood.

* `--file <filename>`: Specify the app entry point. By default, Cavy
looks for an `index.js`.
* `options`: Any [react-native-cli](https://www.npmjs.com/package/react-native-cli) options that are valid for `react-native run-ios`.

#### Examples

Set `index.ios.js` as the entry point:

```bash
cavy run-ios --file index.ios.js
```

Set a custom entry point and specify a device (see [React Native: Running On
Simulator](https://facebook.github.io/react-native/docs/running-on-simulator-ios)):
```bash
cavy run-ios --file index.ios.js --simulator="iPhone 4s"
```

---

### `cavy-run-android`

```bash
cavy run-android [--file <filename>] [options]
```

Run tests in Android. Calls `react-native run-android` under the hood.

* `--file <filename>`: Specify the app entry point. By default, Cavy
looks for an `index.js`.
* `options`: Any [react-native-cli](https://www.npmjs.com/package/react-native-cli) options that are valid for `react-native run-android`.
