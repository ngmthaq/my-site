/* eslint-disable @typescript-eslint/no-require-imports */

const { exec } = require("child_process");

const colors = { reset: "\x1b[0m", green: "\x1b[32m" };

exec("touch .env.local", (err, stdout, stderr) => {
  if (err) {
    console.error(err);
  } else {
    if (stderr) console.log(stderr);
    if (stdout) console.log(stdout);
    console.log(
      `${colors.green}Created .env.local file, see your environment variables in src/types/env.d.ts${colors.reset}`,
    );
  }
});
