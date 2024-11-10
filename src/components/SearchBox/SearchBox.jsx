import React from 'react';
import styles from './SearchBox.module.css';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import { useDispatch, useSelector } from 'react-redux';

const SearchBox = () => {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleSearchChange = event => {
    const action = changeFilter(event.target.value);
    dispatch(action);
  };

  return (
    <div>
      <h3 className={styles.title}>Find contacts by name</h3>
      <input
        className={styles.searchInput}
        type="text"
        value={filter}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchBox;
