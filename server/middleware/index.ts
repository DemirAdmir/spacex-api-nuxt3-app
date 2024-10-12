// server/middleware/index.ts
import securityHeaders from "./securityHeaders";

export default defineEventHandler((event) => {
  // Call security headers middleware for all requests
  securityHeaders(event);
});
