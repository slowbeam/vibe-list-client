import React from 'react';

const SongCard = (props) => {

  return (
    <div className="song-card-outer">
      <div className="song-card">
        <img className="album-cover-image" src={props.albumCover} />
        <h4>{props.title}</h4>
        <h4>{props.artist}</h4>
      </div>
    </div>
  )
};


export default SongCard;
