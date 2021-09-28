/*
 * @Descripttion:
 * @version:
 * @Author: wjm
 * @Date: 2021-09-10 19:49:36
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-09-28 13:27:56
 */
import path from "path";
import fs from "fs";
import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import babel from "@rollup/plugin-babel";
import alias from "@rollup/plugin-alias";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import jsx from "acorn-jsx";

const MODULE_ENV = process.env.MODULE_ENV;

let declarationDir = `./lib/${MODULE_ENV}/types`;

let externalPkg = ["react", "react-dom"];

let output = null;

if (MODULE_ENV == "es") {
  output = {
    dir: "lib/es",
    format: "es",
    preserveModules: true,
    preserveModulesRoot: "src",
    exports: "auto",
  };
}

if (MODULE_ENV == "cjs") {
  output = {
    dir: "lib/cjs",
    format: "cjs",
    preserveModules: true,
    preserveModulesRoot: "src",
    exports: "auto",
  };
}
// split-code, 以组件为单位
const componentDir = "src/components";
const cModuleNames = fs.readdirSync(path.resolve(componentDir));
const componentEntryFiles = cModuleNames
  .map(name =>
    /^[A-Z]\w*/.test(name) ? `${componentDir}/${name}/index.tsx` : undefined,
  )
  .filter(n => !!n);

export default {
  input: ["./src/index.ts", ...componentEntryFiles],
  output,
  // extensions: [".tsx", ".ts"],
  acornInjectPlugins: [jsx()],
  plugins: [
    alias({
      entries: [
        {
          find: "@hooks",
          replacement: path.resolve(__dirname, "src/hooks"),
          extensions: [".ts", ".tsx"],
        },
        {
          find: "@components",
          replacement: path.resolve(__dirname, "src/components"),
          extensions: [".ts", ".tsx"],
        },
      ],
    }),
    peerDepsExternal(),
    // plugins 需要注意引用顺序
    nodeResolve(),
    commonjs(),
    typescript({
      jsx: "preserve",
      tsconfig: "./tsconfig.json",
      declarationDir,
    }),
    babel({
      babelHelpers: "runtime",
      exclude: "node_modules/**",
      extensions: [".ts", ".tsx"],
    }),
  ],
  // external: externalPkg,
};
