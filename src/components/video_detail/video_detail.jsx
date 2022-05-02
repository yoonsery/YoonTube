import React from 'react';
import styles from './video_detail.module.css';
import { htmlUnescape } from 'escape-goat';

const VideoDetail = ({ video, video: { snippet }, changeTitle }) => {
  changeTitle(snippet.title);

  return (
    <section className={styles.detail}>
      <iframe
        className={styles.video}
        type="text/html"
        title="youtube video player"
        width="100%"
        height="500px"
        src={`https://www.youtube.com/embed/${video.id}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <h2 className={styles.title}>{htmlUnescape(snippet.title)}</h2>
      <h3 className={styles.channelTitle}>{snippet.channelTitle}</h3>
      <pre className={styles.description}>{snippet.description}</pre>
    </section>
  );
};
export default VideoDetail;
