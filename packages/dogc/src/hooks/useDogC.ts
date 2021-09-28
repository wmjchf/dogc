/*
 * @Descripttion:
 * @version:
 * @Author: wjm
 * @Date: 2021-09-28 12:37:56
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-09-28 13:29:33
 */
import { useContext } from "react";
import DogCContext, { DogCContextProp } from "@components/DogCContext";

export const useDogC = (): DogCContextProp => {
  const { dogcConfig, dogcTheme } = useContext(DogCContext);

  return { dogcConfig, dogcTheme };
};
