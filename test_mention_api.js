// 测试飞书API的艾特功能
const { execSync } = require('child_process');

// 使用更结构化的方式测试艾特
const testCases = [
  {
    name: '测试1：使用正确的艾特语法',
    message: '请 @ad @col 检查一下',
    expected: '包含艾特ad和col'
  },
  {
    name: '测试2：测试应用ID是否有效',
    message: '<at user_id="cli_a93895b636f95cd4">ad</at> 请处理这个任务',
    expected: '使用ad的应用ID'
  },
  {
    name: '测试3：同时艾特两个应用',
    message: '<at user_id="cli_a93895b636f95cd4">ad</at> <at user_id="cli_a938944862385cbd">col</at> 请协作处理',
    expected: '同时艾特ad和col'
  }
];

const groupId = 'oc_86b03e7dc89b6c070ad7d65cca4e0bee';

console.log('开始测试飞书艾特功能...\n');

testCases.forEach((testCase, index) => {
  console.log(`${index + 1}. ${testCase.name}`);
  console.log(`消息: ${testCase.message}`);
  console.log(`预期: ${testCase.expected}`);
  
  try {
    // 转义消息中的特殊字符
    const escapedMessage = testCase.message.replace(/'/g, "'\"'\"'");
    
    const command = `openclaw message send --channel feishu --target chat:${groupId} --message '${escapedMessage}'`;
    console.log(`执行命令: ${command.substring(0, 100)}...`);
    
    const result = execSync(command, { encoding: 'utf8' });
    console.log(`结果: ${result.includes('✅ Sent') ? '发送成功' : '发送可能失败'}`);
    
    // 提取消息ID
    const match = result.match(/Message ID: (\S+)/);
    if (match) {
      console.log(`消息ID: ${match[1]}`);
    }
    
  } catch (error) {
    console.error(`错误: ${error.message}`);
  }
  
  console.log('---\n');
});

console.log('测试完成。请检查飞书群聊中是否收到了这些测试消息。');
console.log('特别注意：应用ID是否能被正确识别并显示为艾特格式。');