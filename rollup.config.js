/** rollup 번들러 설정 파일 (https://rollupjs.org/introduction/)
 * input : 진입 파일 경로, 어떤 파일부터 불러올지 정함
 *
 * output.file : 번들링된 파일 경로
 * output.format : ES Module 형태로 번들링함
 * output.sourcemap : 소스맵 '.map' 파일 생성 설정, 디버깅 작업에 유용
 *
 * plugins.rollup/plugin-commonjs : CommonJS 형태로 만들어진 모듈도 불러와서 ES 모듈로 변환하여, 결과물에 포함될 수 있게 해줌
 * plugins.rollup-plugin-node-resolve : node_modules 에서 모듈을 불러올 수 있게 해줌. ts/tsx 파일도 불러올 수 있게 해줌
 * plugins.rollup-plugin-peer-deps-external : peerDependencies로 설치한 라이브러리들을 번들링된 결과에 포함시키지 않음
 * plugins.rollup-plugin-terser : 생성된 es번들을 최소화하여 코드 압축
 * plugins.rollup-plugin-postcss : postCSS 도구 지원, postCSS는 CSS 후처리기로서, CSS를 변환하고 확장하는 데 사용되는 도구이며, JavaScript 기반으로 동작, https://www.npmjs.com/package/rollup-plugin-postcss
 * plugins.rollup-plugin-postcss.config : postcss.config.js 파일 사용
 * plugins.rollup-plugin-postcss.extract : 해당 경로로 스타일 파일 추출
 * plugins.rollup-plugin-babel : Javascript 트랜스파일, https://www.npmjs.com/package/@rollup/plugin-babel
 * plugins.rollup-plugin-babel.babelrc : .babelrc 파일 사용
 * plugins.rollup-plugin-typescript2 : Typescript 트랜스파일, https://www.npmjs.com/package/rollup-plugin-typescript2
 * plugins.rollup-plugin-typescript2.tsconfig : tsconfig.json 파일 사용 (선언안해도 기본적으로 참고)
 */

import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";
// import path from "path";
// import pkg from "./package.json";

const extensions = [".js", ".jsx", ".ts", ".tsx"]; // 어떤 확장자를 처리 할 지 정함
// const root = path.resolve("./");

// const NODE_ENV = process.env.NODE_ENV;
// const isDev = NODE_ENV === "development";
process.env.BABEL_ENV = "production"; // babel-preset-react-app를 사용한다면 BABEL_ENV를 필수로 설정해야함.

export default {
  input: "./src/index.ts",
  output: {
    file: "build/main.js",
    format: "es",
    sourcemap: true,
  },
  plugins: [
    commonjs({ include: "node_modules/**" }),
    resolve({ extensions }),
    peerDepsExternal(),
    terser(),
    postcss({ 
      config: "./postcss.config.js",    
      // extract: path.resolve('./build/style.css'), // CSS 파일을 별도로 추출
      // modules: true, // CSS 모듈을 활성화 (선택사항)
    }),
    babel({ babelrc: true }),
    typescript({ tsconfig: "tsconfig.json" }),
  ],
};
