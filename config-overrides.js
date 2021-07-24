module.exports = function override(config, env) {
  console.log("override!");

  config.module.unknownContextRegExp = /^\.\/.*$/;

  return config;
};
