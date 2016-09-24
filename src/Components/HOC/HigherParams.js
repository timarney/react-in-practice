import React from 'react'

const Wrap = function HOCFactoryFactory (params) {
  // do something with params
  console.log(params)
  return function HOCFactory (WrappedComponent) {
    console.log('wrapped:', WrappedComponent, params)
    return class HOC extends React.Component {
      render () {
        console.log('the props', this.props)
        return <div>That's a wrap <WrappedComponent {...this.props} {...params} /></div>
      }
    }
  }
}

// HOCFactoryFactory(params)(WrappedComponent)

module.exports = { Wrap }
