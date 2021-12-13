/*
 * @Descripttion:
 * @version:
 * @Author: wjm
 * @Date: 2021-11-06 15:07:07
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-12-13 23:21:37
 */
import React from "react";
import { RouteObject, Navigate, useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import Drag from "../pages/Drag";
import Doc from "../pages/Doc";
import Preview from "../pages/Preview";
import PhotoView from "../pages/PhotoView";
import ComponentList from "../pages/ComponentNav";
// 组件
import ButtonPage from "../pages/Components/Button";
import CellPage from "../pages/Components/Cell";
import IconPage from "../pages/Components/Icon";
import ImagePage from "../pages/Components/Image";

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
    path: "/photoView",
    element: <PhotoView />,
  },
  {
    path: "/preview",
    element: <Preview />,
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
      {
        path: "icon",
        element: <IconPage />,
      },
      {
        path: "cell",
        element: <CellPage />,
      },
      {
        path: "image",
        element: <ImagePage />,
      },
    ],
  },
];

const Routes: React.FC = () => {
  return useRoutes(routes);
};

export default Routes;
