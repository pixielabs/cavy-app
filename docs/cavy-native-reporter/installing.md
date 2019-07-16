---
id: installing
title: Installing 
sidebar_label: Installing
---

Cavy Native Reporter allows you to send your Cavy test results to native
Android and iOS test runners.

By default Cavy reports a completed test run to [cavy-cli](getting-started/installing.md).
Cavy Native Reporter provides an alternative reporter for Cavy which fires
a Native Module callback when tests are finished. You can then wire this
in to a native test runner such as XCTest.

## When would I want to use this?
You may want to do this if you already have some application tests that are
native, e.g. if you already use XCTest to test parts of your app. This could
be because not all of your app is React Native, or if your app makes heavy
use of native code. You may also want to use it if you have an existing
CI pipeline set up for running a native test framework, and don't want to
adapt it for Cavy & cavy-cli.

You probably don't need this if your app is purely a React Native app
and you have no existing native tests. You can probably just use cavy-cli
instead.

## Installing
To get started using Cavy with native reporting, install using `yarn`:

    yarn add cavy cavy-native-reporter --dev

or `npm`:

    npm i --save-dev cavy cavy-native-reporter

Then link the package:

    react-native link cavy-native-reporter
