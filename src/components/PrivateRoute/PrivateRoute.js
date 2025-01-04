import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route, Redirect } from "react-router-dom";
import { checkSession, login } from "network/ApiAxios";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const verifySession = async () => {
      const { data } = await checkSession();
      console.log(data);
      const validSession = data.success;
      setIsAuthenticated(validSession);
      setIsLoading(false);
    };
    verifySession();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>; // 로딩 중 표시
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/auth" />
      }
    />
  );
};

export default PrivateRoute;
