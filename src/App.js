
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import Loader2 from './components/Loader2';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


export default class App extends Component {
  c= 'jhon'
  render() {
    return (
      <>
       <Router>
       <Navbar/>
       <Routes>
       <Route path="/"  exact element={<News key="general" pageSize={6} country={'in'} category={'general'}/>} />
       <Route path="/business"   exact element={<News key="businnes" pageSize={6} country={'in'} category={'business'}/>} />
       <Route path="/entertainment" exact element={<News key="entertainment"  pageSize={6} country={'in'} category={'entertainment'}/>} />
       <Route path="/health"    exact element={<News  key="health" pageSize={6} country={'in'} category={'health'}/>} />
       <Route path="/science"  exact element={<News key="science" pageSize={6} country={'in'} category={'science'}/>} />
       <Route path="/sports"  exact element={<News key="sports" pageSize={6} country={'in'} category={'sports'}/>} />

       </Routes>
        </Router> 
      </>
    )
  }
}
