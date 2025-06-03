import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

interface LoginButtonProps {
  className?: string;
}

const LoginButton: React.FC<LoginButtonProps> = ({ className = "" }) => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      onClick={() => loginWithRedirect()}
      id="qsLoginBtn"
      className={`btn-margin ${className}`}
    >
      Log in
    </button>
  );
};

export default LoginButton;