function CheckBox(props) {
  const { id, name, label } = props;

  return (
    <div className="mb-3">
      <input
        type="checkbox"
        className="text-sm accent-primary"
        name={name}
        id={id}
      />
      <label htmlFor={id} className="text-sm text-gray-01 ml-6">
        {label}
      </label>
    </div>
  );
}

export default CheckBox;
