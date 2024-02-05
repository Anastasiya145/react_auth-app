import { ReactElement } from "react";
import { Navigate, RouteObject } from "react-router-dom";
import React from "react";
import AuthWrapper from "./AuthWrapper";
import { routes } from "./routes";
import SignIn from "../pages/SignIn/SignIn";
import Home from "../pages/Home/Home";

function createRoute(
  path: string,
  component: ReactElement,
  type = "private"
): RouteObject {
  return {
    path,
    element: <AuthWrapper type={type}>{component}</AuthWrapper>,
  };
}

export const routeStack: RouteObject[] = [
  createRoute("*", <Navigate to={routes.login} />),
  createRoute(routes.login, <SignIn />, "public"),
  createRoute(routes.home, <Home />),
];
