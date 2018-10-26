import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  const thumbnailUrl = video.snippet.thumbnails.default.url;

  return (
    //   TODO: move on clock handler to method
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={thumbnailUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
