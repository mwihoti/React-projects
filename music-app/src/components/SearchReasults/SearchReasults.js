import React from "react";
import './TrackList.css';

import TrackList from "../TrackList/TrackList";

class SearchResults extends React.Component {
    render (){
        return (
            <div className='SearchResults'>
            <h2>Results</h2>
            <TrackList track={this.props.SearchResults} onAdd={this.props.onAdd} />
            </div>
        );
    }
}
export default SearchResults;