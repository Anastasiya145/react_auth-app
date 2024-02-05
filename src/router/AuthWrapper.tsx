import React, { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { routes } from "./routes";

type Props = {
  children: ReactElement;
  type: string;
};

const AuthWrapper: React.FC<Props> = ({ children, type }) => {
  // const { isAuth } = useAuthContext();
  const isAuth = false;

  switch (type) {
    case "public":
      return isAuth ? <Navigate to={routes.home} /> : children;

    case "private":
      return isAuth ? children : <Navigate to={routes.login} />;

    default:
      return children;
  }
};

export default AuthWrapper;
