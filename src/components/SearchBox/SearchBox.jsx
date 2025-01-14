import css from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => {
  const handleInputChange = (evt) => {
    onChange(evt.target.value);
  };

  return (
    <label className={css.searchLabel}>
      Find contacts by name
      <input type="text" value={value} onChange={handleInputChange} />
    </label>
  );
};

export default SearchBox;
