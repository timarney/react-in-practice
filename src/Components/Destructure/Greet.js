import React, {PropTypes} from 'react'

const propTypes = {
  name: PropTypes.string.isRequired
}

/* These examples are equivalent. */
const Greet1 = props => <div>Hi {props.name}!</div>

const Greet2 = ({ name }) => <div>Hi {name}!</div>

// eslint-disable-next-line
const Greet3 = ({name, ...props}) => {
  return <div {...props} >Hi {name}!</div>
}

const Greet4 = (show) => {
  return (
    <div>
    {show ? (
      <span>
        Rendered when `truthy`
        {["Hello ", "World", "!"]}

        {["first", "second"].map((item) => (
            <li key={item}>{item}</li>
        ))}
      </span>
    ) : (
      <span>
        Rendered when `falsey`
      </span>
    )}
    </div>
  )
}

Greet1.propTypes = propTypes

module.exports = {
  Greet1,
  Greet2,
  Greet3,
  Greet4
}
