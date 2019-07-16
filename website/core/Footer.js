/**
 * Copyright (c) 2019-present, Pixie Labs.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

class Footer extends React.Component {
  docUrl(doc, language = "") {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
    const langPart = `${language ? `${language}/` : ""}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : "") + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            {/* We can keep this here as a reference for how it should work if we ever want
             to translate the cavy docs. Hopefully by then v2 with have fixed this issue.
             e.g.
              <a href={this.docUrl('getting-started/installing', this.props.language)}>
                Getting Started
              </a> 
            */}
            <a href={this.docUrl("getting-started/installing")}>
              Getting Started
            </a>
            <a href={this.docUrl("guides/writing-spec-helpers")}>Guides</a>
            <a href={this.docUrl("cavy-native-reporter/installing")}>
              Cavy Native Reporter
            </a>
            <a href={this.docUrl("api/commands")}>API Reference</a>
          </div>
          <div>
            <h5>Community</h5>
            <a href={this.pageUrl("help")}>Help</a>
            <a href={this.pageUrl("contributors")}>Contributors</a>
            <a href={this.pageUrl("media")}>Further reading</a>
          </div>
          <div>
            <h5>More</h5>
            <a href="https://github.com/pixielabs/cavy">GitHub</a>
            <div>
              <a
                className="github-button"
                href={this.props.config.repoUrl}
                data-icon="octicon-star"
                data-count-href="/pixielabs/cavy/stargazers"
                data-show-count="true"
                data-count-aria-label="# stargazers on GitHub"
                aria-label="Star this project on GitHub"
              >
                Star
              </a>
            </div>
            <div>
              <a
                className="github-button"
                href="https://github.com/pixielabs"
                aria-label="Follow @pixielabs on GitHub"
              >
                Follow @pixielabs
              </a>
            </div>
            <div>
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
        </section>

        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
