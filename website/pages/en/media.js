/**
 * Copyright (c) 2019-present, Pixie Labs.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");
const Container = CompLibrary.Container;


const Article = ({ article, index }) => (
  <div key={index} className={`article article${article.type}`}>
    <div className='articleTag'>{article.type}</div>
    <img src={article.image} alt="Organisation's Logo" className="article-image" />
    <small className="article-date">{article.author} • {article.date}</small>
    <div className="article-copy">
      <a href={article.link}>
        <h3>{article.title}</h3>
        <p>{article.content}</p>
      </a>
    </div>
  </div>
)

function Media(props) {
  const { config: siteConfig } = props;

  return (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className='wrapper homeWrapper'>
            <div className="inner">
              <h1 className='mediaTitle'>Blogs, Articles & Videos</h1>
            </div>
          </div>
        </div>

        <Container padding="bottom">
          <div className='articleWrapper'>
            {siteConfig.articles.map((article, index) => (
              <Article article={article} index={index}/>
            ))}
          </div>
        </Container>

        <Container padding="bottom">
          <header>
            <h1>Videos</h1>
          </header>
          <div className="videos">
            <div className="video-wrapper">
              <iframe
                type="text/html"
                width="640"
                height="360"
                src="https://www.youtube.com/embed/VG6Jbe5M1XQ"
              />
            </div>
          </div>
        </Container>
        <Container padding="bottom">
          <div className="blog-mailto">
            <h3>Have you written a blog post about Cavy?</h3>
            <a
              href="mailto:team@pixielabs.io?subject=Cavy Blog Post"
              className="button">
              Send us a link
            </a>
          </div>
        </Container>
    </div>
  );
}

module.exports = Media;
