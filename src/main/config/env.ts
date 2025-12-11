import { Logger } from "../utils/logger.js";

function validateEnv(): string {
  const rootPath = process.env.MEMORY_BANK_ROOT;

  if (!rootPath) {
    Logger.error("MEMORY_BANK_ROOT environment variable is not set");
    Logger.error("Please set MEMORY_BANK_ROOT to the directory where project memory banks are stored");
    Logger.error("Example: export MEMORY_BANK_ROOT=/path/to/memory-bank");
    process.exit(1);
  }

  return rootPath;
}

export const env = {
  rootPath: validateEnv(),
};
