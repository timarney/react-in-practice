import React, {PropTypes} from 'react'

const defaultProps = {
  style: {fontWeight: 'bold', color: 'red', textDecoration: 'underline'}
}

const propTypes = {
  style: PropTypes.object.isRequired,
  className: PropTypes.string,
  name: PropTypes.string.isRequired
}

const Greeting1 = (props) => {
  let style = Object.assign(
      defaultProps.style,
      props.style // allow consumers to override properties
    )

  let className = ['fancy', props.className].join(' ')

  return (
    <div {...props} style={style} className={className}>Hi {props.name}!</div>
  )
}

Greeting1.propTypes = propTypes
Greeting1.defaultProps = defaultProps

export default Greeting1
