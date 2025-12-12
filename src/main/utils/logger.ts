/**
 * Simple logging utility for the MCP server
 * All logging is suppressed for MCP servers per spec:
 * https://modelcontextprotocol.io/docs/develop/build-server#logging-in-mcp-servers
 */
export class Logger {
  private static formatMessage(level: string, message: string): string {
    const timestamp = new Date().toISOString();
    return `[${timestamp}] [${level}] ${message}`;
  }

  static info(message: string): void {
    // Silenced - logging must not go to stdout or stderr during normal operation
  }

  static error(message: string, error?: Error): void {
    // Silenced - logging must not go to stdout or stderr during normal operation
  }

  static warn(message: string): void {
    // Silenced - logging must not go to stdout or stderr during normal operation
  }

  static debug(message: string): void {
    // Silenced - logging must not go to stdout or stderr during normal operation
  }
}
