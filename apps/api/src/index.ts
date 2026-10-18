import { env } from "./env";

import { Elysia } from "elysia";

const app = new Elysia().get("/", () => "Hello Elysia").listen(env.PORT);

console.log(`🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`);
