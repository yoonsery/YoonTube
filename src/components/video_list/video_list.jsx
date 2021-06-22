import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css';

const VideoList = ({ videos, clickedVideo, onVideoClick, display }) => {
  const filterdVideos = videos.filter((video) => video !== clickedVideo);
  return (
    <ul className={styles.videos}>
      {filterdVideos.map((video) => (
        <VideoItem
          key={video.id}
          video={video}
          onVideoClick={onVideoClick}
          display={display}
        />
      ))}
    </ul>
  );
};

export default VideoList;
