import React, { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

export const RTKLayout = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    {children}
    {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    {/* <ReactQueryDevtools position="bottom-right" /> */}
  </QueryClientProvider>
);
