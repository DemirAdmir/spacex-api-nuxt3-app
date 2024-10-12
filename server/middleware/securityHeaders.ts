// server/middleware/securityHeaders.ts
import { defineEventHandler } from "h3";

export default defineEventHandler((event) => {
  const res = event.node.res;

  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("X-XSS-Protection", "1; mode=block");
});
