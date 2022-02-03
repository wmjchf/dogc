/*
 * @Descripttion:
 * @version:
 * @Author: wjm
 * @Date: 2022-02-03 20:09:53
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-02-03 22:59:13
 */
import React from "react";
import { Toast, Button } from "@bufang/dogc";
import "./style/index.less";

const ToastPage = () => {
  return (
    <div className="toast_demo">
      <div className="title">Toast轻提示</div>
      <div className="description">
        在页面中间弹出黑色半透明提示，用于消息通知、加载提示、操作结果提示等场景。
      </div>
      <div className="content">
        <div className="toast_demo_item">
          <span>info提示</span>
          <div className="toast_demo_item_btn">
            <Button
              type="primary"
              shape="circle"
              onTouchStart={() => {
                Toast.info({
                  title: "请重新登录！",
                  duration: 1000000,
                });
              }}>
              info提示
            </Button>
          </div>
        </div>
        <div className="toast_demo_item">
          <span>error提示</span>
          <div className="toast_demo_item_btn">
            <Button
              type="danger"
              shape="circle"
              onTouchStart={() => {
                Toast.error({
                  title: "请重新登录！",
                  duration: 5,
                });
              }}>
              error提示
            </Button>
          </div>
        </div>
        <div className="toast_demo_item">
          <span>success提示</span>
          <div className="toast_demo_item_btn">
            <Button
              type="success"
              shape="circle"
              onTouchStart={() => {
                Toast.success({
                  title: "请重新登录！",
                  duration: 5,
                });
              }}>
              success提示
            </Button>
          </div>
        </div>
        <div className="toast_demo_item">
          <span>warning提示</span>
          <div className="toast_demo_item_btn">
            <Button
              type="warning"
              shape="circle"
              onTouchStart={() => {
                Toast.warning({
                  title: "请重新登录！",
                  duration: 5,
                });
              }}>
              warning提示
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToastPage;
