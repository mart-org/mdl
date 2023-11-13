import { genSingleFile } from "mart-obj-to-sass";
import { choices, decisions } from "mart-desing-token";

const path = "./packages/core/sass/tokens/";
const folderChoices = path + "choices";
const folderDecisions = path + "decisions";

genSingleFile(choices, folderChoices, "choices");
genSingleFile(decisions, folderDecisions, "decisions");
