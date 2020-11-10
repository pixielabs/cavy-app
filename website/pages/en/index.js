/**
 * Copyright (c) 2019-present, Pixie Labs.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");
const CompLibrary = require("../../core/CompLibrary.js");
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function HomeSplash({ siteConfig, language = "" }) {
  const { baseUrl, docsUrl } = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
  const langPart = `${language ? `${language}/` : ""}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

  const Badge = ({ href, src, alt }) => (
    <a className="badge" href={href}>
      <img src={src} alt={alt} height="18" />
    </a>
  );

  const Button = ({ className, href, target, children }) => (
    <div className="pluginWrapper buttonWrapper">
      <a
        className={className ? `button ${className}` : 'button'}
        href={href}
        target={target}>
        {children}
      </a>
    </div>
  );

  return (
    <div className="homeContainer darkBackground">
      <div className="homeSplashFade">
        <div className="wrapper homeWrapper">
          <div className="inner">
            <div>
              <h2 className="projectTitle">
                Start end-to-end testing your React Native application
                <span> across iOS and Android in 5 minutes</span>
              </h2>

              <div className="buttonSection">
                <Button className="splashButton" href={docUrl("getting-started/installing")}>
                  Get Started
                </Button>
              </div>

              <div className="buttonSection promoSection">
                <div className="promoRow">
                  <div className="pluginRowBlock">
                    <Button href="https://github.com/pixielabs/cavy/tree/master/sample-app/CavyDirectory">
                      Browse Sample App
                    </Button>
                    <Button href="https://discord.gg/4NMFMmz">
                      Join the Discord
                    </Button>
                  </div>
                </div>
              </div>

              <div className="buttonSection">
                <Badge
                  href="https://badge.fury.io/js/cavy"
                  src="https://badge.fury.io/js/cavy.svg"
                  alt="npm version"/>
                <Badge
                  href="https://circleci.com/gh/pixielabs/cavy/tree/master.svg?style=svg"
                  src="https://circleci.com/gh/pixielabs/cavy/tree/master.svg?style=svg"
                  alt="Continuous Integration Badge"/>
                <Badge
                  href="https://discord.gg/4NMFMmz"
                  src="https://discordapp.com/api/guilds/604246649845448735/widget.png?style=shield"
                  alt="Discord badge"/>
              </div>
            </div>

            <div className="project-logo">
              <img src={`${baseUrl}img/cavy.png`} alt="Cavy Logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  ); 
}

function Index({ config: siteConfig, language = "" }) {
  const { baseUrl } = siteConfig;

  const Block = ({ id, background, className, align, children, layout }) => (
    <Container
      padding={["bottom", "top"]}
      id={id}
      background={background}
      className={className}
    >
      <GridBlock align={align} contents={children} layout={layout} />
    </Container>
  );

  const Description = () => (
    <Block background="light">
      {[
        {
          content:
            "Cavy is an open-source end-to-end test framework for React Native, developed for use with both iOS and Android applications. Write clean test cases, interact with deeply-nested components and run tests within your live application on a host device. All without touching any native code.",
          image: `https://user-images.githubusercontent.com/126989/46629651-8b925e80-cb39-11e8-90b4-23d447d818f9.gif`,
          imageAlign: "right",
          title: "End-to-end testing for React Native in pure JavaScript"
        }
      ]}
    </Block>
  );

  const CI = () => (
    <Block>
      {[
        {
          content:
            "Cavy comes with a simple command-line interface so you can easily run your tests in your CI environment. [Check out the sample app's CircleCI config](https://github.com/pixielabs/cavy/blob/master/.circleci/config.yml).",
          image: `${baseUrl}img/undraw_mobile_testing.svg`,
          imageAlign: "left",
          title: "Add Cavy to your Continuous Integration toolchain"
        }
      ]}
    </Block>
  );

  const Talks = () => (
    <Block background="dark">
      {[
        {
          content:
            "The team behind Cavy regularly publish blog posts about the latest Cavy features and have spoken at the Red Badger and JS roundabout meetups. <br/><br/>[Read more about Cavy](media)",
          image: `${baseUrl}img/undraw_knowledge.svg`,
          imageAlign: "right",
          title: "Blog posts and talks"
        }
      ]}
    </Block>
  );

  const BuiltBy = () => (
    <div className="built-by text-center paddingBottom paddingTop highlightBackground">
      <h2>Built and maintained by </h2>
      <a href="https://pixielabs.io">
        <img src={`${baseUrl}img/pixielabs-logo-white.svg`} alt="Pixie Labs" />
      </a>
    </div>
  );

  const Features = () => (
    <Block
      layout="threeColumn"
      className="keyFeatures"
      align="center"
    >
      {[
        {
          content: "Quickly set up Cavy with just a few lines of code - it's all pure JavaScript.",
          image: `${baseUrl}img/undraw_speed_test.svg`,
          imageAlign: "top",
          title: "Quick set up"
        },
        {
          content: "Use the command-line interface to run Cavy tests in your CI environment.",
          image: `${baseUrl}img/undraw_open_source.svg`,
          imageAlign: "top",
          title: "Compatible with CI"
        },
        {
          content: "Designed to work with iOS and Android, no extra set up required.",
          image: `${baseUrl}img/undraw_android.svg`,
          imageAlign: "top",
          title: "Cross-platform"
        }
      ]}
    </Block>
  );

  return (
    <div>
      <HomeSplash siteConfig={siteConfig} language={language} />
      <div className="homeMainContainer">
        <Features />
        <Description />
        <CI />
        <Talks />
        <BuiltBy />
      </div>
    </div>
  );
}

module.exports = Index;
