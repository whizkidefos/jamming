import React from 'react';
import ReactDOM from 'react-dom';
import TrackList from '../TrackList/TrackList';
import './Playlist.css';

class Playlist extends React.Component {
    render() {
        return(
            <div className="Playlist">
            <input value="New Playlist"/>
            <TrackList />
            <a className="Playlist-save">SAVE TO SPOTIFY</a>
            </div>
        );
    }
}

export default Playlist;