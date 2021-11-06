/*
 * @Descripttion:
 * @version:
 * @Author: wjm
 * @Date: 2021-11-06 15:07:07
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-11-06 18:42:29
 */
import React from "react";
import { RouteObject, Navigate, useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import Doc from "../pages/Doc";

interface CustomRouteObject extends RouteObject {
  caseSensitive?: boolean;
  children?: CustomRouteObject[];
  element?: React.ReactNode;
  index?: boolean;
  path?: string;
  key?: string;
}

const routes: CustomRouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/home" replace />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/doc",
    element: <Doc />,
  },
];

const Routes: React.FC = () => {
  return useRoutes(routes);
};

export default Routes;
