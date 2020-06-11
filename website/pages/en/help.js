/**
 * Copyright (c) 2019-present, Pixie Labs.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function Help(props) {
  const {config: siteConfig, language = ''} = props;
  const {baseUrl, docsUrl} = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

  const supportLinks = [
    {
      content: `Learn more using the documentation on this site:
  * [Getting Started](/docs/getting-started/installing)
  * [Guides](/docs/guides/writing-spec-helpers)
  * [API reference](/docs/api/commands)
  * [Blog posts and videos](./media)`,
      title: 'Browse Docs',
    },
    {
      content: `Have a look through the repos to see if anyone else has had the same issue:
  * [Cavy](https://github.com/pixielabs/cavy/issues)
  * [Cavy CLI](https://github.com/pixielabs/cavy-cli/issues)
  * [Cavy Native Reporter](https://github.com/pixielabs/cavy-native-reporter/issues)`,
      title: 'View GitHub issues',
    },
    {
      content: `If you're based in London, get in touch with us to arrange to come
      and talk Cavy with us at our [monthly office hours](https://pixielabs.io/london-mentoring-office-hours).`,
      title: 'Come and say hi!',
    },
  ];

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h1>Need help?</h1>
          </header>
          <p>This project is maintained by the dedicated folk at <a href="https://pixielabs.io" target="_blank">Pixie Labs</a>.</p>
          <p>
            You can chat with us and other Cavy users{' '}
            <a href="https://discord.gg/4NMFMmz">
              on our Discord
            </a>.
          </p>
          <GridBlock contents={supportLinks} layout="threeColumn" />
        </div>
      </Container>
    </div>
  );
}

module.exports = Help;
