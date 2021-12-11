/*
 * @Descripttion:
 * @version:
 * @Author: wjm
 * @Date: 2021-12-05 14:01:06
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-12-11 11:22:09
 */
import React, { useEffect } from "react";
import { Button, ConfigProvider } from "@bufang/dogc";
import "./style/index.less";

const ButtonPage: React.FC = () => {
  useEffect(() => {
    document.title = "按钮";
  }, []);
  return (
    <ConfigProvider prefix="">
      <div className="button_demo">
        <div className="title">Button按钮</div>
        <div className="description">
          只需轻点按钮，用户就可以触发动作或做出选择。
        </div>
        <div className="button_demo_container1">
          <span>按钮类型</span>
          <div>
            <Button type="primary">primary</Button>
            <Button type="success">success</Button>
            <Button type="info">info</Button>
            <Button type="warning">warning</Button>
            <Button type="danger">danger</Button>
          </div>
        </div>

        <div className="button_demo_container1">
          <span>镂空按钮</span>
          <div>
            <Button type="primary" plain={true}>
              primary
            </Button>
            <Button type="success" plain={true}>
              success
            </Button>
            <Button type="info" plain={true}>
              info
            </Button>
            <Button type="warning" plain={true}>
              warning
            </Button>
            <Button type="danger" plain={true}>
              danger
            </Button>
          </div>
        </div>

        <div className="button_demo_container1">
          <span>禁用按钮</span>
          <div>
            <Button type="primary" disabled={true}>
              primary
            </Button>
            <Button type="success" disabled={true}>
              success
            </Button>
            <Button type="info" disabled={true}>
              info
            </Button>
            <Button type="warning" disabled={true}>
              warning
            </Button>
            <Button type="danger" disabled={true}>
              danger
            </Button>
          </div>
        </div>

        <div className="button_demo_container1">
          <span>图标按钮</span>
          <div>
            <Button
              type="primary"
              icon={<i className="iconfont iconjianshenfang"></i>}>
              primary
            </Button>
            <Button
              type="success"
              icon={<i className="iconfont iconjianshenfang"></i>}>
              success
            </Button>
            <Button
              type="info"
              icon={<i className="iconfont iconjianshenfang"></i>}>
              info
            </Button>
            <Button
              type="warning"
              icon={<i className="iconfont iconjianshenfang"></i>}>
              warning
            </Button>
            <Button
              type="danger"
              icon={<i className="iconfont iconjianshenfang"></i>}>
              danger
            </Button>
          </div>
        </div>

        <div className="button_demo_container1">
          <span>圆形按钮</span>
          <div>
            <Button
              type="primary"
              icon={<i className="iconfont iconjianshenfang"></i>}
              shape="circle">
              primary
            </Button>
            <Button
              type="success"
              icon={<i className="iconfont iconjianshenfang"></i>}
              shape="circle">
              success
            </Button>
            <Button
              type="info"
              icon={<i className="iconfont iconjianshenfang"></i>}
              shape="circle">
              info
            </Button>
            <Button
              type="warning"
              icon={<i className="iconfont iconjianshenfang"></i>}
              shape="circle">
              warning
            </Button>
            <Button
              type="danger"
              icon={<i className="iconfont iconjianshenfang"></i>}
              shape="circle">
              danger
            </Button>
          </div>
        </div>

        <div className="button_demo_container1">
          <span>loading按钮</span>
          <div>
            <Button type="primary" plain={true} loading={true} shape="circle">
              正在加载
            </Button>
            <Button type="success" plain={true} loading={true} shape="circle">
              处理中
            </Button>
            <Button type="info" plain={true} loading={true} shape="circle">
              请稍等
            </Button>
            <Button type="warning" plain={true} loading={true} shape="circle">
              别急
            </Button>
            <Button type="danger" plain={true} loading={true} shape="circle">
              正在努力
            </Button>
          </div>
        </div>

        <div className="button_demo_container1">
          <span>按钮尺寸</span>
          <div>
            <Button type="primary" size="small" plain={true} shape="circle">
              正在加载
            </Button>
            <Button type="success" size="middle" plain={true} loading={true}>
              正在加载
            </Button>
            <Button type="info" size="large" plain={false}>
              正在加载
            </Button>
            <Button type="warning" size="small">
              别急
            </Button>
            <Button type="danger" size="middle">
              正在努力
            </Button>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default ButtonPage;
