import Input from "./Input";

function LabeledInput({
  label,
  type = "text",
  name,
  id,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id}>{label}</label>

      <Input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default LabeledInput;