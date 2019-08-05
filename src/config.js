import globalConfig from './global.config';
const getLocalConfig = (path) => {
  const context = require.context('./', false, /\**config.js$/);
  if (context.keys().includes(path)) {
    const config = context(path).default || context(path) || {};
    if (config) {
      /* eslint-disable-next-line */
      console.log(`应用本地配置(${path})：`);
      for (const key in config) {
        /* eslint-disable-next-line */
      }
    }
    return config;
  }
  return {};
};
const localConfig = getLocalConfig('./local.config.js');
export default {
  ...globalConfig,
  ...localConfig,
};
