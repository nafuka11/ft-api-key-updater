import { accessSync, constants, Dirent, readdirSync } from "fs";
import { join } from "path";
import { convertExecutable } from "./convert";
import { Executable } from "./type";

export const findExecutables = (path: string) => {
  const dirents = readdirSync(path, { withFileTypes: true });
  const executables = dirents
    .filter((dirent) => isExecutable(path, dirent))
    .map((dirent) => convertExecutable(path, dirent))
    .filter((app): app is Executable => app != null);
  return executables;
};

const isExecutable = (path: string, dirent: Dirent) => {
  try {
    dirent.isFile() && accessSync(join(path, dirent.name), constants.X_OK);
    return true;
  } catch (err) {
    return false;
  }
};
