/** postcss 설정 파일 (https://postcss.org/docs/)
 * plugins.postcss-import : CSS 파일에서 @import 구문 처리 가능
 * postcss-preset-env : 최신 CSS 기능을 사용할 수 있음
 */

module.exports = {
  extensions: [".css", ".module.css"],
  plugins: {
    "postcss-import": {},
    "postcss-preset-env": {},
    "postcss-modules": {},
  },
};
