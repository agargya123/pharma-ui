const os = require("os");
const fs = require("fs");
const path = require("path");
const homedir = os.homedir();

function replaceIdentity(identity) {
  console.log("Replacing DENTITY in server env.ts");
  const configFilePath = path.join(
    homedir,
    "pharma-chain/packages/server/src/env.ts"
  );
  process.env.IDENTITY = identity;
  const data = fs.readFileSync(configFilePath);
  fs.writeFileSync(configFilePath, data);
  console.log("Success");
}

replaceIdentity("user1");
