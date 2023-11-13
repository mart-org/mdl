import { genFilesWithStruct } from "mart-obj-to-sass";
import { choices } from "mart-desing-token";

const folder = "./packages/core/sass/setting";

async function genFiles() {
  await genFilesWithStruct(choices, folder, true);
}

genFiles();
