import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class Newsitem extends Component {
   

  render() {
    let {title,description,imgUrl,readMore,source}=this.props
    return (
     
      <>
      <div className="card" >
      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
     {source}
    <span class="visually-hidden"></span>
  </span>
  <img src={imgUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={readMore} className="btn btn-sm btn-primary">Read More</a>
  </div>
</div>
      </>
    )
  }
}

export default Newsitem