import IoCContainer from "ioc-lite";

import { ApiConfig } from "src/types";
import { HTTP } from "../services/http";
import { Logger } from "../services/logger";
import { Users } from "../services/users";

type IoCResources = {
  config: ApiConfig;
  logger: typeof Logger;
  http: typeof HTTP;
  users: typeof Users;
};

export const createIoCContainer = () => {
  const ioc = new IoCContainer<IoCResources>();
  const config = (window as any).__CONFIG__.api;
  delete (window as any).__CONFIG__;

  ioc.registerClass("logger", Logger);
  ioc.registerClass("users", Users);
  ioc.registerClass("http", HTTP);
  ioc.register("config", config);

  return ioc;
};
