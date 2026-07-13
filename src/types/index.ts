export interface User {
  id: number;
  name: string;
}

export interface ApiConfig {
  path: string;
  resources: { [key: string]: string };
}

export interface LoggerService {
  info(message: string): void;
  error(message: string): void;
}

export interface HttpService {
  logger: LoggerService;
  config: ApiConfig;
  get(url: string): Promise<any>;
}
