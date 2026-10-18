import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const clientEnv = createEnv({
  clientPrefix: "VITE_",
  client: {
    VITE_APP_NAME: z.string().min(1).default("Skeady Dashboard"),
    VITE_API_URL: z.string().url().default("http://localhost:3000"),
  },
  runtimeEnv: import.meta.env,
  emptyStringAsUndefined: true,
});
