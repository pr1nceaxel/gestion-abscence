// generateHash.js

const bcrypt = require("bcrypt");

async function main() {
  const motDePasse = "prince";
  const hash = await bcrypt.hash(motDePasse, 10);
  console.log("Hash généré :", hash);
}

main();
