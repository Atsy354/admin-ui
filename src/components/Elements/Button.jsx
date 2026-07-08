function Button(props) {
  const {
    children,
    type = "submit",
    variant = "primary",
    className = "",
    ...rest
  } = props;
  const baseClasses = "h-12 rounded-md text-sm w-full";
  const variantClasses = {
    primary: "bg-primary text-white",
    secondary: "bg-gray-05 text-gray-01",
  };
  const finalClasses = `${baseClasses} ${variantClasses[variant] || variantClasses.primary} ${className}`.trim();

  return (
    <button className={finalClasses} type={type} {...rest}>
      {children}
    </button>
  );
}

export default Button;
