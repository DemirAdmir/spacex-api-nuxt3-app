// types/nuxt.d.ts

import { NuxtConfig } from "nuxt/config";

declare module "nuxt/config" {
  interface NuxtConfig {
    sitemap?: {
      hostname: string;
      gzip?: boolean;
      routes?: string[];
      defaults?: {
        changefreq?: string;
        priority?: number;
        lastmod?: string;
      };
    };
  }
}
