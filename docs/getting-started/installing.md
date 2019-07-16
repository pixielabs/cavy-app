---
id: installing
title: Installing
sidebar_label: Installing
---

_In these guides, we'll use cavy-cli to get set up and run tests. You can also
use Cavy without the CLI. Have a look at the [Cavy README](https://github.com/pixielabs/cavy)
for help with this. Please note that you can't use the CLI with Expo apps._

To get started with Cavy, install **cavy-cli** globally using yarn
(or npm if preferred):

    yarn global add cavy-cli

Add Cavy to your React Native project as a development dependency:

    yarn add cavy --dev

### Using TypeScript

If you're using TypeScript, you'll also need to install the types package:

    yarn add @types/cavy
