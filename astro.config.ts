import { loadEnv } from 'vite';
import { defineConfig } from 'astro/config';
import react from '@astrojs/react'

// const { X, PUBLIC_SANITY_CLIENTVAR } = loadEnv('production', process.cwd(), '');
const { X, PUBLIC_SANITY_CLIENTVAR } = loadEnv('production', process.cwd(), 'PUBLIC_SANITY_')
if (!X) throw new Error('Could not load .env file into the astro config');
console.log({ X });
console.log({PUBLIC_SANITY_CLIENTVAR})
export const clientEnv = PUBLIC_SANITY_CLIENTVAR
// https://astro.build/config
export default defineConfig({
    integrations: [
        react()
    ]
});
