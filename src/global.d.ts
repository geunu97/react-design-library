/*
 * TypeScript가 css 파일을 모듈로 인식하지 못하지 못하여 import시 오류 발생
 * 따라서 *.css에 대한 모듈 형식을 선언
 */
declare module "*.css" {
  const exports: Record<string, string>;
  export = exports;
}
