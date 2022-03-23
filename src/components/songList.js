// import React from 'react';
import React, {Component} from 'react';
// connect - Component made by react-redux library.
import { connect } from 'react-redux';

// class SongList extends React.Component {
class SongList extends Component {
  renderList(){
    return this.props.songs.map(song=>{
      return (
        <div className='item' key={song.title}>
          <div className="right floated content">
            <button className="ui button primary">
              Select
            </button>
          </div>
          <div className="content">
            {song.title}
          </div>
        </div>
      );
    });
  }
  render() {
    // this.props is equal to {songs: state.songs}
    console.log("this.props=>",this.props); // Return songs and dispatch -->   Manually dispatch an action after calling an action creator. We won't be using this way of changing data though.
    return (
      // <div>SongList</div>
      <div className="ui divided list">
        {this.renderList()}
      </div>
    )
  }
}

// By convention we name this mapStateToProps.
const mapStateToProps=(state)=>{
  console.log(state);
  return {songs: state.songs};    // Will show up as props inside our component.
}

// Call connect and pass in component as 2nd function call.
export default connect(mapStateToProps)(SongList);


