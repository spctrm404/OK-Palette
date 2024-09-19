const fs = require('fs');

// 라이선스 파일을 읽습니다.
const rawData = fs.readFileSync('THIRD-PARTY-LICENSES.json');
const licenses = JSON.parse(rawData);

let output = '# THIRD-PARTY LICENSES\n\n';
output +=
  'This project includes software developed by third parties. The following libraries are used and licensed under the terms stated below:\n\n';

// 각 라이브러리에 대해 필요한 정보만 출력합니다.
for (const [packageName, info] of Object.entries(licenses)) {
  output += `### ${packageName}\n`;
  output += `**License**: ${info.licenses}\n`;
  output += `**Repository**: ${info.repository || 'N/A'}\n`;
  output += `**Publisher**: ${info.publisher || 'N/A'}\n`;
  output += `**Copyright**: ${info.copyright || 'N/A'}\n\n`;
  output += `${info.licenseText || 'License text not available'}\n\n`;
  output += '---\n\n';
}

// 결과를 텍스트 파일로 저장합니다.
fs.writeFileSync('THIRD-PARTY-LICENSES.txt', output);

console.log('THIRD-PARTY-LICENSES.txt 파일이 생성되었습니다.');
