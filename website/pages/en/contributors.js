/**
 * Copyright (c) 2019-present, Pixie Labs.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");
const Container = CompLibrary.Container;

class Contributors extends React.Component {
  render() {
    const githubLink = login => `https://github.com/${login}`;
    const photoLink = id =>
      `https://avatars3.githubusercontent.com/u/${id}?v=4`;

    const { config: siteConfig } = this.props;
    if ((siteConfig.contributors || []).length === 0) {
      return null;
    }

    const contributors = siteConfig.contributors.map(contributor => (
      <a key={contributor.githubId} href={githubLink(contributor.login)}>
        <img src={photoLink(contributor.githubId)} alt="Github Profile Photo" />
        <h3>{contributor.login}</h3>
      </a>
    ));

    return (
      <div className="mainContainer">
        <Container padding="bottom">
          <div className="showcaseSection">
            <div className="prose">
              <h1>Who helped build Cavy?</h1>
            </div>
            <div className="logos contributors">{contributors}</div>
            <div className="prose">
              <h2>Do you want to contribute to Cavy?</h2>
              <a href={siteConfig.repoUrl} className="button">
                Help out on cavy
              </a>
            </div>
            <div className="logos">
              <img src={siteConfig.baseUrl + "img/heart-eyes-cavy.png"} />
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Contributors;
