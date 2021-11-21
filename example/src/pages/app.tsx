/*
 * @Descripttion:
 * @version:
 * @Author: wjm
 * @Date: 2021-11-06 16:46:30
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-11-21 12:15:32
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
