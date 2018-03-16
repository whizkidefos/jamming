import React from 'react';
import ReactDOM from 'react-dom';
import TrackList from '../TrackList/TrackList';
import './SearchResults.css';

class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {searchResults: []};
    }
    render() {
        return(
            <div className="SearchResults">
            <h2>Results</h2>
            <TrackList tracks={this.props.searchResults} />
            </div>
        );
    }
}

export default SearchResults;