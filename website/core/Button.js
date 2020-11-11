const React = require('react');

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

module.exports = Button;
