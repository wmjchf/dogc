/*
 * @Descripttion:
 * @version:
 * @Author: wjm
 * @Date: 2021-09-10 19:49:36
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-11-06 13:44:15
 */
import path from "path";
import fs from "fs";
import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import babel from "@rollup/plugin-babel";
import alias from "@rollup/plugin-alias";
import copy from "rollup-plugin-copy";
import styles from "rollup-plugin-styles";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import jsx from "acorn-jsx";

const MODULE_ENV = process.env.MODULE_ENV;

let declarationDir = `./${MODULE_ENV}/types`;

let output = null;

function copyComponentLess(path) {
  let dir = fs.readdirSync(path);
  dir = dir.map(function (ele, index) {
    var info = fs.statSync(path + "/" + ele);
    if (info.isDirectory() && ele != "style") {
      return ele;
    }
  });
  dir = dir.filter(d => d);
  return dir.map(d => {
    return {
      src: `components/${d}/style/index.less`,
      dest: `${MODULE_ENV}/${d}/style`,
    };
  });
}

function copyDir(path) {
  let dir = fs.readdirSync(path);
  dir = dir.map(function (ele, index) {
    return {
      src: `components/style/${ele}`,
      dest: `${MODULE_ENV}/style`,
    };
  });

  return dir;
}

if (MODULE_ENV == "es") {
  output = {
    dir: "es",
    format: "es",
    preserveModules: true,
    preserveModulesRoot: "components",
    exports: "named",
    assetFileNames: ({ name }) => {
      // 抽离后的样式文件会作为 asset 输出，这里可以配置一下 样式文件的输出位置（为 babel-plugin-import 做准备）
      const { ext, dir, base } = path.parse(name);
      console.log(name);
      if (ext !== ".css") return "[name].[ext]";
      // 规范 style 的输出格式
      return path.join(dir, "style", base);
    },
  };
}

if (MODULE_ENV == "cjs") {
  output = {
    dir: "cjs",
    format: "cjs",
    preserveModules: true,
    preserveModulesRoot: "components",
    exports: "named",
    assetFileNames: ({ name }) => {
      // 抽离后的样式文件会作为 asset 输出，这里可以配置一下 样式文件的输出位置（为 babel-plugin-import 做准备）
      const { ext, dir, base } = path.parse(name);
      if (ext !== ".css") return "[name].[ext]";
      // 规范 style 的输出格式
      return path.join(dir, "style", base);
    },
  };
}
// split-code, 以组件为单位
const componentDir = "components";
const cModuleNames = fs.readdirSync(path.resolve(componentDir));
const componentEntryFiles = cModuleNames
  .map(name =>
    /^[A-Z]\w*/.test(name) ? `${componentDir}/${name}/index.tsx` : undefined,
  )
  .filter(n => !!n);

export default {
  input: ["./components/index.ts", ...componentEntryFiles],
  output,
  // extensions: [".tsx", ".ts"],
  acornInjectPlugins: [jsx()],
  plugins: [
    alias({
      entries: [
        {
          find: "@components",
          replacement: path.resolve(__dirname, "components"),
          extensions: [".ts", ".tsx"],
        },
      ],
    }),
    styles({
      mode: "extract", // 使得 css 是抽离的，而不是打包进 js 的
      less: { javascriptEnabled: true },
      extensions: [".less"],
      minimize: false,
      use: ["less"],
      url: {
        inline: true,
      },

      sourceMap: true, // 必须开启，否则 rollup-plugin-styles 会有 bug
      onExtract(data) {
        // 以下操作用来确保每个组件目录只输出一个 index.css，实际上每一个 子级组件都会输出样式文件，index.css 会包含所有子一个组件的样式
        const { name } = data;
        const { base } = path.parse(name);
        if (base !== "index.css") return false;
        return true;
      },
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
    copy({
      targets: [
        ...copyComponentLess("components"),
        ...copyDir("components/style"),
      ],
    }),
  ],
  // external: externalPkg,
};
