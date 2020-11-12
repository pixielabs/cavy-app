const React = require('react');

const Badge = ({ href, src, alt }) => (
  <a className="badge" href={href}>
    <img src={src} alt={alt} height="18" />
  </a>
);

module.exports = Badge;