---
id: installing
title: Installing
sidebar_label: Installing
---

To make it easier to get set up and testing, Cavy provides a command-line
interface (called cavy-cli). We recommend you get started with this.

You can also run Cavy tests without cavy-cli. In which case, skip the CLI
installation step and just install cavy. You may want to do this if you're
integrating Cavy with your own custom reporting(e.g.
[Cavy Native Reporter](../guides/cavy-native-reporter/installing-and-usage)).

Install **cavy-cli** globally using yarn or npm:

    yarn global add cavy-cli

Add **Cavy** to your React Native project as a development dependency:

    yarn add cavy --dev

### Using TypeScript

If you're using TypeScript, you'll also need to install the types package:

    yarn add @types/cavy --dev
