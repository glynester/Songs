import React from 'react';
import { connect } from 'react-redux'; // Required if we are making changes to state or receiving information.


const SongDetail=({song})=>{
  // console.log("SongDetail props=>",props);
  if (!song){
    return <div>Select a song!</div>
  }
  return (
    // <div>Song Detail</div>
    <div>
      <h3>Details for:</h3>
      <p>Title: {song.title} <br />
          Duration: {song.duration}
      </p>
    </div>
  )
}

const mapStateToProps=(state)=>{
  console.log("state => (SongDetail)=>", state)
  return { song: state.selectedSong }; // props will show a "song" object
};


export default connect(mapStateToProps)(SongDetail);
// export default SongDetail;

