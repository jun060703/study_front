function CheckBox({ onChange }) {
  const handeleChecked = e => {
    onChange(e.target.checked);
  };
  return <input type='checkbox' onChange={handeleChecked} />;
}

export default CheckBox;
