module.exports = {
  apps: [{
    name: 'claw3d-hermes-adapter',
    script: 'server/hermes-gateway-adapter.js',
    cwd: '/Users/sandeep/Desktop/Project26/Agents/Claw3D',
    env: {
      HERMES_API_URL: 'https://api.deepseek.com/v1',
      HERMES_API_KEY: '',
      HERMES_MODEL: 'deepseek-chat',
      HERMES_ADAPTER_PORT: '18789',
      HERMES_AGENT_NAME: 'Hermes',
      NODE_ENV: 'production',
    }
  }]
};
