const rimraf = require("rimraf");
const colors = require("colors");

const foldersToDelete = [
  "dist/src",
  "dist/app",
  "dist/library.js",
  "dist/library.js.LICENSE.txt",
  "client/main.js.LICENSE.txt",
];

foldersToDelete.forEach((folder) => {
  rimraf.sync(folder);
});

console.log(
  "deleted folders and files: dist/src, dist/app, dist/library.js and dist/library.js.LICENSE.txt"
    .red
);
