/**
 * Simple logging utility for the MCP server
 * All output goes to stderr to avoid polluting stdout which is reserved for JSON-RPC protocol
 */
export class Logger {
  private static formatMessage(level: string, message: string): string {
    const timestamp = new Date().toISOString();
    return `[${timestamp}] [${level}] ${message}`;
  }

  static info(message: string): void {
    process.stderr.write(this.formatMessage("INFO", message) + "\n");
  }

  static error(message: string, error?: Error): void {
    process.stderr.write(this.formatMessage("ERROR", message) + "\n");
    if (error) {
      process.stderr.write("Stack trace: " + error.stack + "\n");
    }
  }

  static warn(message: string): void {
    process.stderr.write(this.formatMessage("WARN", message) + "\n");
  }

  static debug(message: string): void {
    if (process.env.DEBUG === "true") {
      process.stderr.write(this.formatMessage("DEBUG", message) + "\n");
    }
  }
}
