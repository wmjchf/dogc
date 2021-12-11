/*
 * @Descripttion:
 * @version:
 * @Author: wjm
 * @Date: 2021-11-06 16:44:55
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-12-11 12:49:53
 */
import React from "react";
import Icon from "./image/icon.png";
import Button from "./image/button.png";
import Cell from "./image/cell.png";
import "./style/index.less";

const Preview: React.FC = () => {
  return (
    <div className="preview">
      <img src={Icon} />
      <img src={Button} />
      <img src={Cell} />
    </div>
  );
};

export default Preview;
