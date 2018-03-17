import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import TrackList from '../TrackList/TrackList';
import Track from '../Track/Track';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchResults: [
                { name: 'What I have Done', artist: 'Linkin Park', album: 'Meteora' 
            },
                { name: 'Hello there', artist: 'John Legermen', album: 'Another' 
            }
            ],
            playlistName: "Smooth Jazz",
            playlistTracks: [
                {name: 'Nu Sungo', artist: 'Spirogyra', album: 'Catching the sun'},
                {name: 'Bayon Bottoms', artist: 'Crusaders', album: 'Silent Evenings'}
            ]
        }
    }

    addTrack(track) {}

    render() {
        return(
            <div>
            <h1>Ja<span className="highlight">mm</span>ing</h1>
            <div className="App">
                <SearchBar />
                <div className="App-playlist">
                <SearchResults searchResults={this.state.searchResults} />
                <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
                <Track track={this.props.track} key={track.id}/>
                </div>
            </div>
            </div>
        );
    }
}

export default App;