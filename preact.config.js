/* eslint-disable @typescript-eslint/no-var-requires */
const tailwind = require("preact-cli-tailwind");

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
module.exports = (config, env, helpers) => {
  config = tailwind(config, env, helpers);
  return config;
};
