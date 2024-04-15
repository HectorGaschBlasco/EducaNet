import { defineConfig } from 'astro/config';
import db from "@astrojs/db";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: 'server', // If its on client, the forms doesn't work but if it's on server the pages loads some JS
  integrations: [db(), tailwind()],
  devToolbar: {
    enabled: false
  }
});