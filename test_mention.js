// 测试飞书艾特应用ID功能
const { execSync } = require('child_process');

const groupId = 'oc_86b03e7dc89b6c070ad7d65cca4e0bee';
const appId1 = 'cli_a93895b636f95cd4'; // ad
const appId2 = 'cli_a938944862385cbd'; // col

// 测试1：直接使用艾特语法
const message1 = `测试艾特应用ID：<at user_id="${appId1}">ad</at> <at user_id="${appId2}">col</at>`;

console.log('测试消息1:', message1);

try {
  const result = execSync(`openclaw message send --channel feishu --target chat:${groupId} --message '${message1}'`, {
    encoding: 'utf8'
  });
  console.log('发送结果:', result);
} catch (error) {
  console.error('发送失败:', error.message);
}

console.log('\n---\n');

// 测试2：尝试不同的艾特格式
const message2 = `@ad @col 请检查一下`;

console.log('测试消息2:', message2);

try {
  const result = execSync(`openclaw message send --channel feishu --target chat:${groupId} --message '${message2}'`, {
    encoding: 'utf8'
  });
  console.log('发送结果:', result);
} catch (error) {
  console.error('发送失败:', error.message);
}