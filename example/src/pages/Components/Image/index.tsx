/*
 * @Descripttion:
 * @version:
 * @Author: wjm
 * @Date: 2021-12-05 14:01:06
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-12-11 17:29:25
 */
import React, { useEffect } from "react";
import { Image } from "@bufang/dogc";
import Bg1 from "./image/bg1.png";
import Bg2 from "./image/bg2.png";
import "./style/index.less";

const ImagePage: React.FC = () => {
  useEffect(() => {
    document.title = "图片";
  }, []);
  return (
    <div className="image_demo">
      <div className="title">Image图片</div>
      <div className="description">
        增强版的 img
        标签，提供多种图片填充模式，支持图片懒加载、加载中提示、加载失败提示。
      </div>
      <div className="image_demo_container">
        <div className="image_item1">
          <div className="image_item_content">
            <Image src={Bg2} alt="背景.png" fill="cover" />
          </div>
          <span>填充模式: cover</span>
        </div>
        <div className="image_item2">
          <div className="image_item_content">
            <Image src={Bg1} alt="背景.png" fill="cover" />
          </div>
          <span>填充模式: cover</span>
        </div>
      </div>
    </div>
  );
};

export default ImagePage;
