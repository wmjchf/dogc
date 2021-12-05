/*
 * @Descripttion:
 * @version:
 * @Author: wjm
 * @Date: 2021-11-06 15:07:07
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-12-05 14:22:10
 */
import React from "react";
import { RouteObject, Navigate, useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import Drag from "../pages/Drag";
import Doc from "../pages/Doc";
import ComponentList from "../pages/ComponentNav";
// 组件
import ButtonPage from "../pages/Components/Button";

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
    path: "home",
    element: <Home />,
  },
  {
    path: "drag",
    element: <Drag />,
  },
  {
    path: "/doc",
    element: <Doc />,
  },
  {
    path: "componentList",
    element: <ComponentList />,
  },
  {
    path: "component",
    children: [
      {
        path: "button",
        element: <ButtonPage />,
      },
    ],
  },
];

const Routes: React.FC = () => {
  return useRoutes(routes);
};

export default Routes;
