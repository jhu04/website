// @ts-check
import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx"
import yaml from '@rollup/plugin-yaml';

// https://astro.build/config
export default defineConfig({
    base: process.env.BASE ?? "/",
    integrations: [mdx()],
    vite: {
        plugins: [yaml()]
    }
});