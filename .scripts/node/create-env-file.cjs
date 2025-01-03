/* eslint-disable @typescript-eslint/no-require-imports */

const { exec } = require("child_process");
const { log, error, warn } = require("./console.cjs");

exec("touch .env.local", (err, stdout, stderr) => {
  if (err) error(err);
  else {
    if (stderr) warn(stderr);
    if (stdout) log(stdout);
    log("Created .env.local file, see your environment variables in src/types/env.d.ts");
  }
});
