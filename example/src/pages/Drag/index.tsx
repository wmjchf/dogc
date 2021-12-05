/*
 * @Descripttion:
 * @version:
 * @Author: wjm
 * @Date: 2021-11-06 15:08:49
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-11-21 16:29:21
 */
import React from "react";
// import { Button } from "@bufang/dogc";
import {
  useDrag,
  useDrop,
  DropTargetMonitor,
  DragSourceMonitor,
} from "react-dnd";
import "./style/index.less";

const DragComponent: React.FC = () => {
  const [{ isDragging }, drager] = useDrag({
    type: "Box",
    collect: (monitor: DragSourceMonitor) => {
      return {
        isDragging: monitor.isDragging(),
      };
    },
  });
  const show = isDragging ? 0 : 1;
  return (
    <div className="drag_area" ref={drager} style={{ opacity: show }}>
      拖拽区域
    </div>
  );
};

const DropComponent: React.FC = () => {
  // 第一个参数是 collect 方法返回的对象，第二个参数是一个 ref 值，赋值给 drop 元素
  const [collectProps, droper] = useDrop({
    // accept 是一个标识，需要和对应的 drag 元素中 item 的 type 值一致，否则不能感应
    accept: "Box",
    drop: () => {
      console.log("drop");
    },
    hover: () => {
      console.log("hover");
    },
    // collect 函数，返回的对象会成为 useDrop 的第一个参数，可以在组件中直接进行使用
    collect: (minoter: DropTargetMonitor) => ({
      isOver: minoter.isOver(),
      highlighted: minoter.canDrop,
    }),
  });

  const borderColor = collectProps.isOver ? "red" : "yellow";
  const content = collectProps.isOver
    ? "快松开，放到碗里来"
    : "将 Box 组件拖动到这里";
  return (
    <div
      ref={droper}
      style={{ borderColor: borderColor }}
      className="drop_area">
      {content}
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <div className="home">
      <DragComponent />
      <DropComponent />
    </div>
  );
};

export default Home;
