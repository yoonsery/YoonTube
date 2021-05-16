import React, { useRef } from 'react';
import styles from './search_header.module.css';

const SearchHeader = ({ onSearch }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <img src="/images/logo.png" alt="logo" className={styles.logo} />
        <h1 className={styles.title}>YouTube</h1>
      </div>
      <input
        ref={inputRef}
        className={styles.input}
        type="search"
        placeholder="Search..🔍"
        onKeyPress={onKeyPress}
      />
      <button type="submit" className={styles.button} onClick={onClick}>
        <img
          src="/images/search.png"
          alt="search"
          className={styles.buttonImg}
        />
      </button>
    </header>
  );
};

export default SearchHeader;
