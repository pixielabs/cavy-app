---
id: faq
title: Frequently Asked Questions
sidebar_label: Cavy FAQ's
---

### I'm trying to test a `<Text>` component and am getting the error: `Cannot read property 'children' of undefined`

You need to `wrap` your `<Text>` component before testing it, otherwise Cavy
does not have access to its props. [See the API documentation](./api/test-hooks#wrapcomponent)
for examples of using the `wrap` function.

### How does Cavy compare to Appium? What is the benefit?

Cavy is a comparable tool to Appium. The key difference is that Appium uses
native hooks to access components (accessibility IDs), wheras Cavy uses React
Native refs. This means that Cavy sits directly within your React Native
environment (working identically with both Android and iOS builds), making it
easy to integrate into your application very quickly, without much
overhead.

### What does this allow me to do that Jest does not?

Jest is a useful tool for unit testing individual React Native components,
whereas Cavy is an integration testing tool allowing you to run end-to-end user
interface tests.

### How does Cavy compare to other end-to-end frameworks for React Native?

The most obvious comparison is to [Detox](https://github.com/wix/Detox):

|                         | Cavy                                                                                                                                                                       | Detox                                                                                                                                                                                                                                                                                                                                                                   | Conclusion                                                                                                                           |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Installation and set up | This is a major plus for Cavy - installation and set up is identical for both iOS and Android. The only set up you need to do is wrap your app in Cavy's Tester component. | Installation and set up is different for both iOS and Android - both involve a fair amount of configuration. You also need to choose and set up a third party test runner e.g. Jest. In order to run tests you need to add app-specific configuration to your `package.json`, specifying by name which devices you want to test on (either simulators or real devices). | Cavy is really lightweight, and is much easier to set up and get running quickly. There is no custom configuration. It 'just works'. |
| Hooking up components   | Hook up components by setting a test reference as its ref. If you're using refs for another purpose already, you can still pass these in as a second argument.             | Hook up components by setting a test reference as its `testID` prop. Not all React components support this prop, so you may need to manually propagate it through to the correct native component.                                                                                                                                                                      | About the same.                                                                                                                      |
| Testing functionality   | Cavy is JavaScript only, so doesn't support testing functionality that needs access to native code, for example tapping at an x, y coordinate.                             | Detox does touch native code and therefore offers a wider range of testing functionality.                                                                                                                                                                                                                                                                               | Detox has more in-built functionality.                                                                                               |
