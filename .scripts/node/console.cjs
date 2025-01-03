const colors = { reset: "\x1b[0m", green: "\x1b[32m", yellow: "\x1b[33m", red: "\x1b[31m" };

module.exports.log = (message) => {
  console.log(colors.green + message + colors.reset);
};

module.exports.warn = (message) => {
  console.warn(colors.yellow + message + colors.reset);
};

module.exports.error = (message) => {
  console.error(colors.red + message + colors.reset);
};
