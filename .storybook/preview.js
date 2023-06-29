/** storybook 설정 파일
 * parameters.options.storySort : storybook 사이드바 메뉴의 순서를 조정 (https://storybook.js.org/docs/react/writing-stories/naming-components-and-hierarchy)
 */

module.exports = {
  parameters: {
    options: {
      storySort: {
        includeNames: true,
        order: [
          "Atoms",
          ["*"],
          "Molecules",
          ["*"],
          "Organisms",
          ["*"],
          "Templates",
          ["*"],
          "Pages",
          ["*"],
          "*",
        ],
      },
    },
  },
};
