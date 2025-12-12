import {
  Request as MCPRequest,
  ServerResult as MCPResponse,
} from "@modelcontextprotocol/sdk/types.js";
import { Controller } from "../../../../presentation/protocols/controller.js";
import { serializeError } from "../helpers/serialize-error.js";
import { MCPRequestHandler } from "./mcp-router-adapter.js";

export const adaptMcpRequestHandler = <T extends any, R extends Error | any>(
  controller: Controller<T, R>
): MCPRequestHandler => {
  return async (request: MCPRequest): Promise<MCPResponse> => {
    const { params } = request;
    const body = params?.arguments as T;
    const response = await controller.handle({
      body,
    });

    const isError = response.statusCode < 200 || response.statusCode >= 300;

    if (isError) {
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(serializeError(response.body)),
          },
        ],
        isError: true,
      };
    }

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(response.body),
        },
      ],
    };
  };
};
