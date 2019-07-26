/**
 * Copyright (c) 2019-present, Pixie Labs.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const { siteConfig, language = "" } = this.props;
    const { baseUrl, docsUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
    const langPart = `${language ? `${language}/` : ""}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
          <a
            className="badge"
            href="https://badge.fury.io/js/cavy">
            <img
              src="https://badge.fury.io/js/cavy.svg"
              alt="npm version"
              height="18"
            />
          </a>
          <a
            className="badge"
            href="https://circleci.com/gh/pixielabs/cavy/tree/master.svg?style=svg">
            <img
              src="https://circleci.com/gh/pixielabs/cavy/tree/master.svg?style=svg"
              alt="Continuous Integration Badge"
              height="18"
            />
          </a>
          <a
            className="badge"
            href="https://discord.gg/4NMFMmz">
            <img
              src="https://discordapp.com/api/guilds/604246649845448735/widget.png?style=shield"
              alt="Discord badge"
              height="18"
            />
          </a>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="project-logo">
        <img src={props.img_src} alt="Cavy Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <Logo img_src={`${baseUrl}img/cavy.png`} />
        </div>
        <PromoSection>
          <Button href={docUrl("getting-started/installing")}>
            Get Started
          </Button>
          <Button href="https://github.com/pixielabs/cavy/tree/master/sample-app/CavyDirectory">
            Browse Sample App
          </Button>
          <Button href="https://discord.gg/4NMFMmz">
            Join the Discord
          </Button>
        </PromoSection>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = "" } = this.props;
    const { baseUrl } = siteConfig;

    const Block = props => (
      <Container
        padding={["bottom", "top"]}
        id={props.id}
        background={props.background}
        className={props.className}
      >
        <GridBlock
          align={props.align}
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const Description = () => (
      <Block background="dark">
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
        layout="fourColumn"
        background="highlight"
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
            content: "Designed to work with iOS and Android, no extra set up required. Can you believe?",
            image: `${baseUrl}img/undraw_android.svg`,
            imageAlign: "top",
            title: "Cross-platform"
          },
          {
            content: "Can't get enough of TypeScript? Neither can Cavy! We've got type definitions.",
            image: `${baseUrl}img/undraw_code_review.svg`,
            imageAlign: "top",
            title: "TypeScript support"
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
}

module.exports = Index;
