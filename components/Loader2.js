import React, { Component } from 'react'
import spinner from './spinner.gif'
export default class Loader2 extends Component {
  render() {
    return (
      <div >
        <img className='spinner' src={spinner} alt="" />
      </div>
      
    )
  }
}
