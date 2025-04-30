import s from './SearchBox.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectNameFilter } from '../../redux/selectors';
import { setNameFilter } from '../../redux/filtersSlice';
const SearchBox = () => {
  const userSearch = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const onChange = e => {
    dispatch(setNameFilter(e.target.value));
  };

  return (
    <div className={s.searchBox}>
      <p>Find contacts by name</p>
      <input type="text" value={userSearch} onChange={onChange} />
    </div>
  );
};

export default SearchBox;
