/** storybook 환경 설정 파일
 * 현재 *.mdx파일과 *.stories.ts파일은 @storybook/react-webpack5을 이용하여 번들링하며, TS를 JS로 트랜스파일 하기 위해 webpack 커스텀 설정 추가 함
 *
 * stories : storybook 사이드 메뉴에서 위에 표시하기 위해 Introduction.mdx를 먼저 불러옴
 */

module.exports = {
  stories: [
    "../src/docs/storybook/Introduction.mdx",
    "../src/components/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react-webpack5",
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve("babel-loader"),
          options: {
            presets: ["@babel/preset-react", "@babel/preset-typescript"],
          },
        },
      ],
    });
    return config;
  },
};
