import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Loader2 from './Loader2';

export class News extends Component {
    static defaultProps = {
        country : 'in',
        category: 'general'
      }
  constructor(){
    super();
    this.state = {
        articles : [], 
        loadingState : false,
        page: 1,
        key : "",
        totalResults : 0,
        
    }
  }
    updateState = async (category,page,pageSize) =>{
      let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${category}&apiKey=3d70c8b585a644d2b3861f88be788532&page=${page}&pageSize=${pageSize}`;
      this.setState({loadingState: true})
      let data = await fetch(url)
      let finalData= await data.json()
      this.setState({articles : finalData.articles,totalResults: finalData.totalResults,loadingState : false })

   }
  async componentDidMount() { 
    this.updateState(this.props.category,this.state.page,this.props.pageSize)
  }
  forward= async ()=>{
    this.updateState(this.props.category,this.state.page+1,this.props.pageSize)
    this.setState({page:(this.state.page+1)})
  }
  backward= async ()=>{
    this.updateState(this.props.category,this.state.page-1,this.props.pageSize)
    this.setState({page:(this.state.page-1)})
  }
  render() {
    return (
      <>
      {this.state.loadingState && <Loader2/>}
      <div className="heading"><h1 className='heading'>-Top Headlines-</h1></div>
      <div className="container mt-4">
        <div className="row">
        {this.state.articles.map((value,index)=>{
            return <div className="col-md-4 mt-1 ">{!(this.state.loadingState)&&<Newsitem title={value.title} description={value.description} source={value.source.name} readMore={value.url} imgUrl={!value.urlToImage?"https://i0.wp.com/boingboing.net/wp-content/uploads/2022/12/Screen-Shot-2022-12-30-at-9.09.43-PM.png?fit=1200%2C668&ssl=1":value.urlToImage}/>}</div>
        })}
        
        </div>
      </div>
      <div key={this.state.url} className="container  mt-4 d-flex justify-content-center ">
      <div className="btn-group me-2 " role="group" aria-label="First group">
    <button type="button" disabled={this.state.page<=1} className="btn btn-primary mx-1 " onClick={this.backward}>Previous</button>
    <button type="button" disabled={!(this.state.page<Math.ceil(this.state.totalResults/this.props.pageSize))}className="btn btn-primary  togglePage" onClick={this.forward}>Next</button>
  </div>

      </div>
      </>
    )
  }
}

export default News