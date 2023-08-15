import React, { FC } from "react";
import { api } from "@/lib/axios";

// Export any child component with the api util.
export const withApi = <T extends object>(Component: FC<T>) => {
  const WithApi: FC<T> = (props) => {
    return <Component {...props} api={api} />;
  };

  return WithApi;
};
