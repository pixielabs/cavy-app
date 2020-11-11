const React = require('react');
const Button = require('./Button');

// By default, the image is on the left, pass in 'reverse' = true to swap the
// image to the right.
const Section = ({ className, title, content, button, src, reverse }) => { 
  const baseClasses = 'container paddingBottom paddingTop'
  return (
    <div className={className ? `${baseClasses} ${className}` : baseClasses }>
      <div className='wrapper'>
        <div className={reverse ? 'block blockReverse' : 'block'}>
          <div className='blockElement'>
            <h2>{title}</h2>
            <p>{content}</p>
            {button &&
              <Button className='orangeButton' href={button.href}>
                {button.text}
              </Button>
            }
          </div>
          <div className='blockElement'>
            <img src={src} />
          </div>
        </div>
      </div>
    </div>
  )
}

module.exports = Section;
