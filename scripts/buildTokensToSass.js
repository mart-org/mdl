import { writeSassFiles } from "mart-obj-to-sass";
import { choices } from "mart-desing-token";

const folder = "./packages/core/sass/setting";
writeSassFiles(choices, folder, true);
