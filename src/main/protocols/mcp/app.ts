import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { McpServerAdapter } from "./adapters/mcp-server-adapter.js";
import routes from "./routes.js";

// Get package.json version
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const packageJsonPath = join(__dirname, "../../../../package.json");
const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf-8"));

const router = routes();
const app = new McpServerAdapter(router);

app.register({
  name: "memory-bank",
  version: packageJson.version,
});

export default app;
