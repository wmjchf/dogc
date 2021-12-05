/*
 * @Descripttion:
 * @version:
 * @Author: wjm
 * @Date: 2021-12-05 12:38:58
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-12-05 14:16:19
 */
import React from "react";
import { useNavigate } from "react-router-dom";

import "./style/index.less";

const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <div onClick={() => navigate("/doc")}>简介</div>
      <div onClick={() => navigate("/componentList")}>组件</div>
    </div>
  );
};

export default Home;
