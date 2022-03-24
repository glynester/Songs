// import React from 'react';
import React, {Component} from 'react';
// connect - Component made by react-redux library.
import { connect } from 'react-redux';
import { selectSong } from '../actions';

// class SongList extends React.Component {
class SongList extends Component {
  renderList(){
    return this.props.songs.map(song=>{
      return (
        <div className='item' key={song.title}>
          <div className="right floated content">
            <button 
              className="ui button primary"
              onClick={()=>this.props.selectSong(song)}
            >
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
// Runs every time we change our REDUX state or we run our reducers and produce some new state objects
const mapStateToProps=(state)=>{
  console.log("state=>",state);
  return {songs: state.songs};    // Will show up as props inside our component.
}

// Call connect and pass in component as 2nd function call.
// export default connect(mapStateToProps)(SongList);
// Pass in action creator as 2nd argument.
// connect function will take that selectSong action creator and pass it into our component as a prop.
// Note that we don't just call the action creator directly when the button gets clicked
export default connect(mapStateToProps, { selectSong })(SongList);

// Redux only detects action creator "selectSong" because of the way it is set up above.
// This setup calls the despatch function for us - we don't need to manually do this.
// Always pass an action creator into the connect function.


