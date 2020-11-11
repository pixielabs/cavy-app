const React = require("react");

const Button = require(`${process.cwd()}/core/Button.js`);

const PixieLabs = ({ baseUrl }) => (
  <div className='container paddingBottom paddingTop'>
      <div className='pixieWrapper wrapper'>
        <div className='pixieBackground'>
          <img src={`${baseUrl}img/Office.jpg`} />
        </div>
        <div className='square squareSmall squareLeftRed'></div>
        <div className='square squareLarge squareLeftGreen'></div>
        <div className='square squareLarge squareRightRed'></div>
        <div className='square squareSmall squareRightGreen'></div>
        <div className='pixieBlock'>
          <img src={`${baseUrl}img/pixielabs-logo-white.svg`} />
          <h2 className='pixieLabsTitle'>
            Have an idea for <span className='redUnderline'>working smarter</span> or
            a <span className='greenUnderline'>unique customer experience?</span>
          </h2>
          <Button className="whiteButton" href="https://pixielabs.io">
            Let's have a chat
            <span>
              <img className='rightChevron' src={`${baseUrl}img/black-right-arrow.svg`} />
            </span>
          </Button>
        </div>
      </div>
    </div>
)

module.exports = PixieLabs;