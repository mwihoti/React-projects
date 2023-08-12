import React, { Component } from 'react';
import './SearchBar.css';

export class SearchBar extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         term: ''
      };
      this.handleTermChange=this.handleTermChange.bind(this);
      this.search=this.search.bind(this);
      this.handleEnter=this.handleEnter(this);
    }
    handleTermChange(event){
        this.setState({term: event.target.value});
    }
    search(){
        this.props.onSearch(this.state.term);
    }
    handleEnter (event){
        if(event.keyCode === 13){
            this.search();
        }
    }
    
  render() {
    return (
      <div className='SearchBar'>
        <input placeholder='Enter song, album or artist' onChange={this.handleTermChange} onKeyUp={this.handleEnter} />
        <button className='SearchButton' onClick={this.search}> SEARCH
        </button>
        
      </div>
    );
  }
}

export default SearchBar;
