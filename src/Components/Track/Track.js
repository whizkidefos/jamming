import React from 'react';
import ReactDOM from 'react-dom';
import './Track.css';

class Track extends React.Component {

    renderAction() {
        if(this.props.isRemoval === true){
            return '-';
        } else {
            return '+';
        }
    }

    render() {
        return(
            <div className="Track">
            <div className="Track-information">
                <h3></h3>
                <p> | </p>
            </div>
            <a className="Track-action">{ this.renderAction }</a>
            </div>
        );
    }
}

export default Track;