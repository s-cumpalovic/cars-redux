import { Route, Switch, Redirect } from "react-router-dom";
import React from "react";
import AppCars from "./pages/AppCars";
import AddCar from "./pages/AddCar";
import AppLogin from "./pages/AppLogin";
import AppRegister from "./pages/AppRegister";
import AppSingleCar from "./pages/AppSingleCar";
import useAuth from "./hooks/useAuth";

const AuthRoute = ({ children, ...rest }) => {
  const { user } = useAuth();

  return <Route {...rest}>{user ? children : <Redirect to="/login" />}</Route>;
};

const GuestRoute = ({ children, ...rest }) => {
  const { user } = useAuth();

  return <Route {...rest}>{user ? <Redirect to="/cars" /> : children}</Route>;
};

export default function Router() {
  return (
    <Switch>
      <GuestRoute path="/login">
        <AppLogin />
      </GuestRoute>
      <GuestRoute path="/register">
        <AppRegister />
      </GuestRoute>
      <AuthRoute exact path="/cars">
        <AppCars />
      </AuthRoute>
      <AuthRoute path="/cars/:id">
        <AppSingleCar />
      </AuthRoute>
      <AuthRoute path="/add">
        <AddCar />
      </AuthRoute>
      <AuthRoute path="/edit/:id">
        <AddCar />
      </AuthRoute>
    </Switch>
  );
}
