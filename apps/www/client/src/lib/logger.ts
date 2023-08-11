export interface Logger {
  log: LogFunction;
  warn: LogFunction;
  error: LogFunction;
}

export type LogFunction = (...args: any[]) => void;

export const logger: Logger = {
  log: (...args) => console.log(args),
  warn: (...args) => console.log(args),
  error: (...args) => console.error(args),
};

export {};
