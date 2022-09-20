const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

// 함수로 만들게 되면 if 체크를 할 수 있다.
module.exports = (phase) => {
  // 개발 단계 라면???
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'kokyusik91',
        mongodb_password: 'KEhQQvZ6LKtTict0',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'my-site-dev',
      },
    };
  }
  // 개발 단계가 아닌 단계 에서는?? 개발 환경 변수 설정
  return {
    env: {
      mongodb_username: 'kokyusik91',
      mongodb_password: 'KEhQQvZ6LKtTict0',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'my-site',
    },
  };
};
