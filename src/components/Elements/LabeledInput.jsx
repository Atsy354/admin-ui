function LabeledInput(props) {
  const { label, type, id, name, placeholder } = props;

  return (
    <div className="mb-6">
      <label htmlFor={id} className="block text-sm mb-2">
        {label}
      </label>
      <input
        type={type}
        className="py-3 pl-4 text-sm rounded-md w-full bg-special-mainBg border border-gray-03 text-gray-01 focus:border-black focus:outline-none focus:ring-0"
        placeholder={placeholder}
        name={name}
        id={id}
      />
    </div>
  );
}

export default LabeledInput;
