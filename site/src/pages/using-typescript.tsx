/*
 * @Descripttion:
 * @version:
 * @Author: wjm
 * @Date: 2021-11-07 16:03:38
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-11-07 16:05:49
 */
// If you don't want to use TypeScript you can delete this file!
import * as React from "react";
import { PageProps } from "gatsby";

type DataProps = {
  site: {
    buildTime: string;
  };
};

const UsingTypescript: React.FC<PageProps<DataProps>> = ({ data, path }) => {
  return null;
};

export default UsingTypescript;
