function LabeledInput(props) {
  const {
    label,
    type = "text",
    id,
    name,
    placeholder,
    className = "",
    ...rest
  } = props;

  return (
    <div className={`mb-6 ${className}`.trim()}>
      <label htmlFor={id} className="block text-sm mb-2">
        {label}
      </label>
      <input
        type={type}
        className="py-3 pl-4 text-sm rounded-md w-full bg-special-mainBg border border-gray-03 text-gray-01 focus:border-black focus:outline-none focus:ring-0"
        placeholder={placeholder}
        name={name}
        id={id}
        {...rest}
      />
    </div>
  );
}

export default LabeledInput;
