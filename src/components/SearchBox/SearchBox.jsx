import s from "./SearchBox.module.scss";
const SearchBox = ({ value, onChange }) => {
  return (
    <div className={s.searchBox}>
      <p>Find contacts by name</p>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
};

export default SearchBox;
