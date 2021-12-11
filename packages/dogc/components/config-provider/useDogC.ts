/*
 * @Descripttion:
 * @version:
 * @Author: wjm
 * @Date: 2021-09-28 12:37:56
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-12-11 10:05:45
 */
import { useContext } from "react";
import DogCContext, { DogCCommonProp, DogCPrivateProps } from "./config";

export const useDogC = (): DogCCommonProp & DogCPrivateProps => {
  return useContext(DogCContext);
};
