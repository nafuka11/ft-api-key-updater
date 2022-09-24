import { Command } from "commander";
import { processPath } from "./process";

export const parseArguments = () => {
  const program = new Command();
  program
    .nameFromFilename(process.env.npm_package_name!)
    .description(process.env.npm_package_description!)
    .version(process.env.npm_package_version!)
    .argument("<path>", "scripts to update 42 API key")
    .action(async (path: string) => {
      processPath(path);
    });
  program.parse();
};
