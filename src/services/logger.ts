import { LoggerService } from "src/types";

export class Logger implements LoggerService {
  static $singleton = true;

  info(message: string) {
    const date = new Date().toISOString();

    console.log("[INFO]", `[${date}]`, message);
  }

  error(message: string) {
    const date = new Date().toISOString();

    console.error("[ERROR]", `[${date}]`, message);
  }
}
