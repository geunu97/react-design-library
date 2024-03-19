/** semantic-release 설정 파일
 * git 커밋 히스토리를 분석하고, 버전을 자동으로 생성하며, 해당 버전을 npm에 배포
 *
 * dev브랜치를 통해 prerelease 가능하도록 설정
 * 
 * 커밋 메시지 컨벤션 규칙 따라야 함 (https://www.conventionalcommits.org/en/v1.0.0/)
 * 커밋 메시지 규칙에 맞게 버전을 자동으로 결정
 */

module.exports = {
  branches: [
    "main",
    { name: "dev", prerelease: "dev" }
  ],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github",
    "@semantic-release/npm",
  ],
};
