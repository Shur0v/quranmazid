const { spawn } = require("child_process");

function run(command, args) {
  const child = spawn(command, args, {
    stdio: "inherit",
    shell: true,
  });
  return child;
}

const backend = run("npm", ["--prefix", "backend", "run", "dev"]);
const frontend = run("npm", ["run", "dev"]);

function shutdown() {
  backend.kill();
  frontend.kill();
  process.exit(0);
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
