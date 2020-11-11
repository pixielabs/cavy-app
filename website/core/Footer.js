/**
 * Copyright (c) 2019-present, Pixie Labs.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

function Footer({ config }) {
  const { baseUrl, docsUrl, footerIcon, title, repoUrl, copyright } = config;

  const docUrl = (doc, language = "") => {
    const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
    const langPart = `${language ? `${language}/` : ""}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  const pageUrl = (doc, language) => {
    return baseUrl + (language ? `${language}/` : "") + doc;
  }

  return (
    <footer className="nav-footer" id="footer">
      <section className="sitemap">
        <div>
          <a href="https://pixielabs.io">
            <img className='builtWithLove' src={`${baseUrl}img/Built-with-love.png`} alt="Pixie Labs" />
          </a>
        </div>

        <div>
          <h5>Docs</h5>
          {/* We can keep this here as a reference for how it should work if we ever want
            to translate the cavy docs. Hopefully by then v2 with have fixed this issue.
            e.g.
            <a href={docUrl('getting-started/installing', this.props.language)}>
              Getting Started
            </a> 
          */}
          <a href={docUrl("getting-started/installing")}>Getting Started</a>
          <a href={docUrl("guides/writing-spec-helpers")}>Guides</a>
          <a href={docUrl("api/commands")}>API Reference</a>
        </div>

        <div>
          <h5>Community</h5>
          <a href={pageUrl("help")}>Help</a>
          <a href={pageUrl("contributors")}>Contributors</a>
          <a href={pageUrl("media")}>Further reading</a>
        </div>

        <div className="footerMore">
          <h5>More</h5>
          <a href="https://github.com/pixielabs/cavy">GitHub</a>

          <div>
            <a
              className="github-button"
              href={repoUrl}
              data-icon="octicon-star"
              data-count-href="/pixielabs/cavy/stargazers"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub"
            >
              Star
            </a>

            <a
              className="github-button"
              href="https://github.com/pixielabs"
              aria-label="Follow @pixielabs on GitHub"
            >
              Follow @pixielabs
            </a>

            <a
              href="https://twitter.com/share?ref_src=twsrc%5Etfw"
              className="twitter-share-button"
              data-text="Up and testing in no time at all with Cavy!"
              data-url="https://cavy.app"
              data-via="pixielabs"
              data-hashtags="reactnative"
              data-related=""
              data-show-count="false"
            >
              Tweet
            </a>

            <script
              async
              src="https://platform.twitter.com/widgets.js"
              charSet="utf-8"
            />
          </div>
        </div>

        <div>
          <a href={baseUrl}>
            {footerIcon && (
              <img src={baseUrl + footerIcon} alt={title} width="66"/>
            )}
          </a>
          <section className="copyright">{copyright}</section>
        </div>
      </section>
    </footer>
  );
}

module.exports = Footer;
