/*
 * TypeScript가 scss 또는 module.css 파일을 모듈로 인식하지 못함
 * 따라서 scss에 대한 모듈 형식을 선언
 */
declare module "*.scss" {
  const content: { [className: string]: string };
  export = content;
}
