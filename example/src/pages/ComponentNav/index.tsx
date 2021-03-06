/*
 * @Descripttion:
 * @version:
 * @Author: wjm
 * @Date: 2021-12-05 12:50:54
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-12-08 22:58:55
 */
import React from "react";
import { useNavigate } from "react-router-dom";
import "./style/index.less";

const ComponentList: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="component_list">
      <span>组件列表</span>
      <div className="component_list_container">
        <div onClick={() => navigate("/component/button")}>按钮（Button）</div>
        <div onClick={() => navigate("/component/icon")}>图标 (Icon)</div>
        <div onClick={() => navigate("/component/cell")}>列表项 (Cell)</div>
      </div>
    </div>
  );
};

export default ComponentList;
