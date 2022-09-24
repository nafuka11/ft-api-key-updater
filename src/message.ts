import pico from "picocolors";
import { exit } from "process";
import prompts from "prompts";
import { Executable } from "./type";

export const showApplications = (executables: Executable[]) => {
  console.log("API keys for the following applications will be updated:");
  executables.forEach((value) => {
    console.log(`  ${value.applicationName}`);
  });
  console.log();
};

export const confirmExecution = async (): Promise<boolean> => {
  const response = await prompts([
    {
      type: "confirm",
      name: "confirm",
      message: "Can you confirm?",
      initial: true,
    },
  ]);
  return response.confirm;
};

export const showApplicationMessage = (applicationId: string) => {
  console.log();
  console.log("Please visit your application page and copy secret.");
  console.log(
    `  URL: ${pico.underline(
      `https://profile.intra.42.fr/oauth/applications/${applicationId}`
    )}`
  );
  console.log();
};

export const promptSecret = async (
  applicationName: string
): Promise<string> => {
  const response = await prompts(
    [
      {
        type: "password",
        name: "secret",
        message: `Input 42 API secret${
          applicationName ? ` (${applicationName})` : ""
        }`,
      },
    ],
    {
      onCancel: () => {
        exit(1);
      },
    }
  );
  return response.secret;
};

export const showExecutionResult = (executableName: string) => {
  console.log(`✨  Done: ${executableName}`);
};
