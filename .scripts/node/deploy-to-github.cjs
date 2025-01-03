/* eslint-disable @typescript-eslint/no-require-imports */

const { exec } = require("child_process");
const { log, error, warn } = require("./console.cjs");
const { resolve } = require("path");
require("dotenv").config({ path: resolve(process.cwd(), ".env.local") });

const execPromise = (command) => {
  return new Promise((resolve, reject) => {
    exec(command, {}, (error, stdout, stderr) => {
      if (error) reject(error);
      if (stderr) warn(stderr);
      if (stdout) log(stdout);
      resolve();
    });
  });
};

(async () => {
  try {
    const date = new Date();
    const token = process.env?.VITE_GITHUB_TOKEN || "";
    const commit = `git commit -m "Deploy from script (${date.toUTCString()})"`;
    const push = `git push --set-upstream -f https://${token}@github.com/ngmthaq/ngmthaq.github.io.git main`;
    await execPromise(`cd ./dist && git init`);
    await execPromise(`cd ./dist && git branch -M main`);
    await execPromise(`cd ./dist && git add --all`);
    await execPromise(`cd ./dist && ${commit}`);
    await execPromise(`cd ./dist && ${push}`);
    await execPromise(`rm -rf ./dist`);
  } catch (e) {
    await execPromise(`rm -rf ./dist/.git`);
    error(e);
  }
})();
