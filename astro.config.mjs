import { loadEnv } from 'vite';
import { defineConfig } from 'astro/config';

const { X } = loadEnv('production', process.cwd(), '');
if (!X) throw new Error('Could not load .env file into the astro config');
console.log({ X });

// https://astro.build/config
export default defineConfig({});
