/*
 * @Descripttion:
 * @version:
 * @Author: wjm
 * @Date: 2021-12-05 14:01:06
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-12-08 23:43:31
 */
import React, { useEffect } from "react";
import { Icon } from "@bufang/dogc";
import "./style/index.less";

const IconPage: React.FC = () => {
  useEffect(() => {
    document.title = "列表项";
  }, []);
  return (
    <div className="icon_demo">
      <div className="title">Icon图标</div>
      <div className="description">突出个性你我</div>
      <div className="icon_demo_container">
        <div className="icon_demo_container_item">
          <Icon type="sing" size={30} />
          <span>sing</span>
        </div>

        <div className="icon_demo_container_item">
          <Icon type="water" size={30} />
          <span>water</span>
        </div>

        <div className="icon_demo_container_item">
          <Icon type="fruit" size={30} />
          <span>fruit</span>
        </div>

        <div className="icon_demo_container_item">
          <Icon type="breakfast" size={30} />
          <span>breakfast</span>
        </div>

        <div className="icon_demo_container_item">
          <Icon type="loading" size={20} fill="#ff6700" />
          <span>loading</span>
        </div>

        <div className="icon_demo_container_item">
          <Icon type="right-arrow" size={20} fill="#ff6700" />
          <span>right-arrow</span>
        </div>

        <div className="icon_demo_container_item">
          <Icon type="cook" size={20} fill="#ff6700" />
          <span>cook</span>
        </div>

        <div className="icon_demo_container_item">
          <Icon type="camera" size={20} fill="#ff6700" />
          <span>camera</span>
        </div>

        <div className="icon_demo_container_item">
          <Icon type="sleep" size={20} fill="#ff6700" />
          <span>sleep</span>
        </div>

        <div className="icon_demo_container_item">
          <Icon type="smile" size={20} fill="#ff6700" />
          <span>smile</span>
        </div>

        <div className="icon_demo_container_item">
          <Icon type="run" size={20} fill="#ff6700" />
          <span>run</span>
        </div>

        <div className="icon_demo_container_item">
          <Icon type="draw" size={20} fill="#ff6700" />
          <span>draw</span>
        </div>
      </div>
    </div>
  );
};

export default IconPage;
