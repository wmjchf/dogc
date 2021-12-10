/*
 * @Descripttion:
 * @version:
 * @Author: wjm
 * @Date: 2021-11-06 16:46:30
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-12-10 22:20:33
 */
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Routes from "../routes";

const App: React.FC = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Router>
        <Routes />
      </Router>
    </DndProvider>
  );
};

export default App;
