---
id: reporting-to-android
title: Reporting to Android (JUnit)
sidebar_label: Android example (JUnit)
---

To set up your own JUnit test that makes use of `cavy-native-reporter`:

1. Open your project's `android` folder in Android Studio.
2. Create a file for your instrumented Android tests at
`module-name/src/androidTest/java/`. Switching to Project view in Android
studio should help with this. [Follow this link for more detailed instructions on setting up Instumented Android tests](https://developer.android.com/studio/test#test_types_and_location) i.e. tests that run on an Android device
or emulator.
3. Add the following dependencies to `android/app/build.gradle` under
`dependencies` (don't touch the `build.gradle` in the app folder itself!):

```java
dependencies: {
  androidTestImplementation 'junit:junit:4.12'
  androidTestImplementation 'androidx.test:runner:1.1.0'
  androidTestImplementation 'androidx.test:rules:1.1.0'
  ...
}
```
4. Add the following to `android/app/build.gradle` under `defaultConfig`:

```java
defaultConfig {
  testInstrumentationRunner "androidx.test.runner.AndroidJUnitRunner"
  ...
}
```
5. Write a test.


Taking the sample app as an example, we have an JUnit test `BridgeTest` which
waits for Cavy tests to run and fails if any test returns an error:

```java
package com.sampleapp.bridgetest;

import androidx.test.rule.ActivityTestRule;

import org.junit.Rule;
import org.junit.Test;
import static org.junit.Assert.*;

import com.cavynativereporter.RNCavyNativeReporterModule;
// This should be the identifier for your own app's main activity.
import com.sampleapp.MainActivity;

public class BridgeTest {
  // This rule launches the main activity before each test annotated with @Test.
  @Rule
  public ActivityTestRule<MainActivity> activityRule = new ActivityTestRule(MainActivity.class);

  @Test
  public void testBridge() throws Exception {
    // Wait 60 seconds to receive a test report from Cavy.
    RNCavyNativeReporterModule.waitForReport(60);
    // Pull the error count from the report object.
    double errorCount = RNCavyNativeReporterModule.cavyReport.getDouble("errorCount");
    // Note: Third argument is the `delta` allowed between the actual and
    // expected double value.
    assertEquals(0.0, errorCount, 0.0);
  }
}

```

### See also

#### API reference

* [`waitForReport`](../../api/cavy-native-reporter#waitforreportseconds)
* [`cavyReport`](../../api/cavy-native-reporter#cavyreport)

#### Useful links for Android Testing
- [Writing instrumented unit tests](https://developer.android.com/training/testing/unit-testing/instrumented-unit-tests)
- [Using JUnit4 Rules](https://developer.android.com/training/testing/junit-rules)
- [Using the JUnit Runner](https://developer.android.com/training/testing/junit-runner)
