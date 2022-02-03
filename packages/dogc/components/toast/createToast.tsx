/*
 * @Descripttion:
 * @version:
 * @Author: wjm
 * @Date: 2022-02-03 17:04:16
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-02-03 22:47:41
 */
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import Toast, { IToastProps } from "./Toast";

const createToast = () => {
  const div = document.createElement("div");

  document.body.appendChild(div);

  let toastId = 0;

  return {
    info(option: IToastProps) {
      if (toastId == 1) return;

      toastId = 1;

      const onClose = () => {
        unmountComponentAtNode(div);
        toastId = 0;
        option.onClose && option.onClose();
      };

      render(<Toast {...option} type="info" onClose={onClose} />, div);
    },
    success(option: IToastProps) {
      if (toastId == 1) return;

      toastId = 1;

      const onClose = () => {
        unmountComponentAtNode(div);
        toastId = 0;
        option.onClose && option.onClose();
      };

      render(<Toast {...option} type="success" onClose={onClose} />, div);
    },
    warning(option: IToastProps) {
      if (toastId == 1) return;

      toastId = 1;

      const onClose = () => {
        unmountComponentAtNode(div);
        toastId = 0;
        option.onClose && option.onClose();
      };

      render(<Toast {...option} type="warning" onClose={onClose} />, div);
    },
    error(option: IToastProps) {
      if (toastId == 1) return;

      toastId = 1;

      const onClose = () => {
        unmountComponentAtNode(div);
        toastId = 0;
        option.onClose && option.onClose();
      };

      render(<Toast {...option} type="error" onClose={onClose} />, div);
    },
  };
};

export default createToast();
