import React from 'react';
import styles from './video_item.module.css';
import { htmlUnescape } from 'escape-goat';

const VideoItem = ({ video, video: { snippet }, onVideoClick, display }) => {
  const displayType = display === 'list' ? styles.list : styles.grid;
  const title =
    snippet.title.length < 60
      ? snippet.title
      : snippet.title.slice(0, 60) + '...';

  return (
    <li
      className={`${styles.container} ${displayType}`}
      onClick={() => onVideoClick(video)}
    >
      <img
        className={styles.thumbnail}
        src={snippet.thumbnails.medium.url}
        alt="video thumbnail"
      />
      <div className={styles.metadata}>
        <p className={styles.title}>{htmlUnescape(title)}</p>
        <p className={styles.channel}>{snippet.channelTitle}</p>
      </div>
    </li>
  );
};
export default VideoItem;
