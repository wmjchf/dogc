/*
 * @Descripttion:
 * @version:
 * @Author: wjm
 * @Date: 2021-12-05 14:01:06
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-12-08 22:55:59
 */
import React, { useEffect } from "react";
import { Icon } from "@bufang/dogc";
import "./style/index.less";

const CellPage: React.FC = () => {
  useEffect(() => {
    document.title = "列表项";
  }, []);
  return (
    <div className="cell_demo">
      <div className="title">Cell列表项</div>
      <div className="description">为列表中的单个展示项</div>
      <div className="cell_demo_container">
        <Icon type="sing" size={30} />
      </div>
    </div>
  );
};

export default CellPage;
