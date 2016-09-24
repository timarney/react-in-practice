import React from 'react'

const Foo = (props) => <div {...props}>Foo Here {props.children(props)} -</div>
const Bar = (props) => <div {...props}>Bar Here</div>

module.exports = {
  Foo,
  Bar
}

Foo.propTypes = {
  children: React.PropTypes.func.isRequired
}
