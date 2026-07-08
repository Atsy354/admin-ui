function CheckBox(props) {
  const { id, name, label, className = "", ...rest } = props;

  return (
    <div className={`mb-3 ${className}`.trim()}>
      <input
        type="checkbox"
        className="text-sm accent-primary"
        name={name}
        id={id}
        {...rest}
      />
      <label htmlFor={id} className="text-sm text-gray-01 ml-6">
        {label}
      </label>
    </div>
  );
}

export default CheckBox;
