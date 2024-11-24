import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import styles from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search contacts..."
        onChange={handleFilterChange}
        className={styles.searchInput}
      />
    </div>
  );
};

export default SearchBox;
