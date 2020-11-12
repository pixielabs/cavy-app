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

// https://docusaurus.io/docs/en/api-pages this is actually how you require
// your own components.
const Badge = require(`${process.cwd()}/core/Badge.js`);
const Button = require(`${process.cwd()}/core/Button.js`);
const PixieLabs = require(`${process.cwd()}/core/PixieLabs.js`);

function HomeSplash({ siteConfig, language = "" }) {
  const { baseUrl, docsUrl } = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
  const langPart = `${language ? `${language}/` : ""}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

  return (
    <div className="homeContainer">
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
                  <span>
                    <img className='rightChevron' src={`${baseUrl}img/white-right-arrow.svg`} />
                  </span>
                </Button>
              </div>

              <div className="buttonSection promoSection">
                <div className="promoRow">
                  <div className="pluginRowBlock">
                    <Button href="https://github.com/pixielabs/cavy/tree/master/sample-app/CavyDirectory">
                      Browse Sample App
                      <span>
                        <img className='rightChevron' src={`${baseUrl}img/white-right-arrow.svg`} />
                      </span>
                    </Button>
                    <Button href="https://discord.gg/4NMFMmz">
                      Join the Discord
                      <span>
                        <img className='rightChevron' src={`${baseUrl}img/white-right-arrow.svg`} />
                      </span>
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
              <img src={`${baseUrl}img/Screens.png`} alt="Cavy Logo" />
            </div>
          </div>
          <img className='downCheveron' src={`${baseUrl}img/white-down-arrow.svg`} />
        </div>
      </div>
    </div>
  ); 
}

function Index({ config: siteConfig, language = "" }) {
  const { baseUrl } = siteConfig;

  const TextBlock = ({ title, content, button }) => (
    <div className='blockElement'>
      <h2>{title}</h2>
      <p>{content}</p>
      {button &&
        <Button className='orangeButton' href={button.href}>
          {button.text}
          <span>
            <img className='rightChevron' src={`${baseUrl}img/white-right-arrow.svg`} />
          </span>
        </Button>
      }
    </div>
  )

  const Description = () => (
    <Container padding={["bottom", "top"]} background='light'>
      <div className='block'>
        <TextBlock
          title='End-to-end testing for React Native in pure JavaScript'
          content='Cavy is an open-source end-to-end test framework for React Native, developed for use with both iOS and Android applications. Write clean test cases, interact with deeply-nested components and run tests within your live application on a host device. All without touching any native code.' />
        <div className='blockElement featureImage imageGroup'>
          <img src={`${baseUrl}img/Testing-screenshot.png`} />
          <img className='mobileScreenshot rounded' src={`${baseUrl}img/Mobile-screenshot.png`} />
        </div>
      </div>
    </Container>
  )

  const CI = () => (
    <Container padding={["bottom", "top"]}>
      <div className='block'>
        <div className='circle circleLeft'></div>
        <div className='circle circleCenter'></div>
        <div className='circle circleRight'></div>
        <div className='blockElement featureImage'>
          <img className='screenshot' src={`${baseUrl}img/CI-screenshot.png`} />
        </div>
        <TextBlock
          title='Add Cavy to your Continuous Integration toolchain'
          content='Cavy comes with a simple command-line interface so you can easily run your tests in your CI environment.'
          button={{ text: 'View sample', href: 'https://github.com/pixielabs/cavy/blob/master/.circleci/config.yml' }} />
      </div>
    </Container>
  )

  const Talks = () => (
    <Container padding={["bottom", "top"]} background='light'>
      <div className='block'>
        <TextBlock
          title='Blog posts and talks'
          content='The team behind Cavy regularly publish blog posts about the latest Cavy features and have spoken at the Red Badger and JS roundabout meetups.'
          button={{ text: 'Read more', href: `${baseUrl}en/media` }} />
        <div className='blockElement featureImage imageGroup'>
          <img className='screenshot rounded' src={`${baseUrl}img/Talk.png`} />
          <img className='blogScreenshot' src={`${baseUrl}img/Blog-screenshot.png`} />
        </div>
      </div>
    </Container>
  )

  const Features = () => (
    <Container padding={["bottom", "top"]} className='keyFeatures' >
      <GridBlock align='center' layout='threeColumn' contents={[
        {
          content: "Quickly set up Cavy with just a few lines of code - it's all pure JavaScript.",
          image: `${baseUrl}img/Quick-Set-Up.svg`,
          imageAlign: "top",
          title: "Quick set up"
        },
        {
          content: "Use the command-line interface to run Cavy tests in your CI environment.",
          image: `${baseUrl}img/CI-Compatible.svg`,
          imageAlign: "top",
          title: "Compatible with CI"
        },
        {
          content: "Designed to work with iOS and Android, no extra set up required.",
          image: `${baseUrl}img/Cross-platform.svg`,
          imageAlign: "top",
          title: "Cross-platform"
        }
      ]} />
    </Container>
  );

  return (
    <div>
      <HomeSplash siteConfig={siteConfig} language={language} />
      <div className="homeMainContainer">
        <Features />
        <Description />
        <CI />
        <Talks />
        <PixieLabs baseUrl={baseUrl}/>
      </div>
    </div>
  );
}

module.exports = Index;
