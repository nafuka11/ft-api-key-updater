import { Dirent } from "fs";
import { join } from "path";
import { Executable } from "./type";

const FILE_REGEX = /^(\d+)(_(.*))?(\.[^.]+)$/;

export const convertExecutable = (
  path: string,
  dirent: Dirent
): Executable | null => {
  const regexResult = FILE_REGEX.exec(dirent.name);
  if (!regexResult) {
    return null;
  }
  const applicationId = regexResult[1];
  const applicationName = regexResult[3];
  const scriptPath = join(path, dirent.name);

  return {
    applicationId: applicationId,
    applicationName: applicationName,
    path: scriptPath,
    filename: dirent.name,
  };
};
