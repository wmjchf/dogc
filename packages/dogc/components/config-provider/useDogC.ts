/*
 * @Descripttion:
 * @version:
 * @Author: wjm
 * @Date: 2021-09-28 12:37:56
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-11-06 13:30:07
 */
import { useContext } from "react";
import DogCContext, { DogCContextProp } from "./config";

export const useDogC = (): DogCContextProp => {
  const { dogcConfig, dogcTheme } = useContext(DogCContext);

  return { dogcConfig, dogcTheme };
};
