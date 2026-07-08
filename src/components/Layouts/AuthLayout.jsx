import Logo from "../Elements/Logo.jsx";

function AuthLayout(props) {
  return (
    <main className="min-h-screen bg-special-mainBg flex justify-center items-center">
      <div className="w-full max-w-sm">
        <Logo />
        {props.children}
      </div>
    </main>
  );
}

export default AuthLayout;
