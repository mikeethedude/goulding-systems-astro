import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    site: 'https://gouldingcreations.com',
    integrations: [tailwind()],
    redirects: {
        "/work": "/#projects",
        "/about": "/#about",
        "/contact": "/#contact",
    }
});
