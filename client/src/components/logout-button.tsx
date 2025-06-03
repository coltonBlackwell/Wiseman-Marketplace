import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

interface LogoutButtonProps {
  className?: string;
}

const LogoutButton: React.FC<LogoutButtonProps> = ({ className = "" }) => {
  const { logout } = useAuth0();

  return (
    <button
      onClick={() => logout()}
      id="qsLogoutBtn"
      className={`btn-margin ${className}`}
    >
      Log out
    </button>
  );
};

export default LogoutButton;