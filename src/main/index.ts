#!/usr/bin/env node

import app from "./protocols/mcp/app.js";
import { Logger } from "./utils/logger.js";

app.start().catch((error) => {
  Logger.error("Fatal error during startup", error as Error);
  process.exit(1);
});
