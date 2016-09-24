import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { Greeting
       , Greeting1
       , Greet1
       , Greet2
       , Greet3
       , Greet4
       , Foo
       , Bar
       , Header
       , Wrap
       } from './Components/index'

const TestHOC = Wrap({'data-test': 'hmmm'})(Bar)

class App extends Component {
    render () {
      const props = {
        style: {fontWeight: 'bolder', color: 'red'},
        name: 'Tim',
        'data-id': 'id44'
      }

      return (
        <div className='App'>
          <div className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <h2>Welcome to React</h2>
            <Header />
          </div>
          <div className='App-intro'>
            <Greeting />
            <hr />
            { /* Keep in mind that order matters. */ }
            <Greeting1 className='greet greeting' {...props} name={'Arney'} />
            <hr />
            <Greet1 name='Tim' />
            <hr />
            <Greet2 />
            <hr />
            <Greet3 name='My Name' data-a='a' data-b='b' />
            <hr />
            <Greet4 show />
            <hr />
            <Foo name='foo' type='foo-comp'>
            {
              (propsFromFoo) => {
                return <Bar data-name='bar' {...propsFromFoo} />
              }
            }
            </Foo>
            <hr />

            <p>HOC</p>
            <TestHOC data-props='pass props' />
            <p>Works?</p>
            </div>
        </div>
      )
    }
}

export default App
