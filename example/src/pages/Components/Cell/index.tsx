/*
 * @Descripttion:
 * @version:
 * @Author: wjm
 * @Date: 2021-12-05 14:01:06
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-12-10 23:26:42
 */
import React, { useEffect } from "react";
import { Cell, Icon } from "@bufang/dogc";
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
        <Cell
          title="设置WLAN热点"
          description="来自M78幸运"
          isArrow={true}
          icon={<Icon type="sleep" size={30} />}></Cell>
        <Cell
          title="泰罗"
          description="来自M78幸运"
          isArrow={true}
          icon={<Icon type="water" size={30} />}></Cell>
        <Cell
          title="已连接设备"
          description="查看已连接设备"
          isArrow={true}
          icon={<Icon type="write" size={30} />}></Cell>

        <Cell
          title="Android Beam"
          description="通过NFC链接传输内容，已开启"
          isArrow={true}
          icon={<Icon type="fruit" size={30} />}></Cell>
        <Cell
          title="默认钱包"
          description="小米钱包(小米公交、门卡模拟)"
          isArrow={true}
          icon={<Icon type="draw" size={30} />}></Cell>

        <Cell
          title="dogc组件"
          description="react移动端组件库"
          icon={<Icon type="cook" size={30} />}
          isArrow={true}></Cell>
        <Cell
          title="启用数据网络"
          description="允许通过移动网络存取数据"
          isArrow={true}></Cell>
        <Cell
          title="流量套餐设置"
          description="防止流量偷跑"
          isArrow={true}></Cell>
        <Cell title="系屏显示" description="关闭" isArrow={true}></Cell>
      </div>
    </div>
  );
};

export default CellPage;
