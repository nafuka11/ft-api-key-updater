import { runExecutable } from "./execute";
import { findExecutables } from "./file";
import {
  confirmExecution,
  promptSecret,
  showApplicationMessage,
  showApplications,
  showExecutionResult,
} from "./message";
import { Executable } from "./type";

export const processPath = async (path: string) => {
  const executables = findExecutables(path);
  if (executables.length === 0) {
    return;
  }

  showApplications(executables);
  const confirm = await confirmExecution();
  if (!confirm) {
    return;
  }

  for (let executable of executables) {
    await processExecutable(executable);
  }
};

const processExecutable = async (executable: Executable) => {
  showApplicationMessage(executable.applicationId);
  const secret = await promptSecret(executable.applicationName);

  await runExecutable(executable.path, secret);
  showExecutionResult(executable.filename);
};
