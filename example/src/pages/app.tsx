/*
 * @Descripttion:
 * @version:
 * @Author: wjm
 * @Date: 2021-11-06 16:46:30
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-11-06 17:22:40
 */
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../routes";

const App: React.FC = () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
};

export default App;
