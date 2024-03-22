import { loadEnv } from 'vite';
import { defineConfig } from 'astro/config';
import react from '@astrojs/react'

const { X, PUBLIC_SANITY_CLIENTVAR, PUBLIC_SANITY_APPVAR }
  = loadEnv('production', process.cwd(), '');

if (!X) throw new Error('Could not load .env file into the astro config');
console.log({ X });
console.log({PUBLIC_SANITY_CLIENTVAR})
console.log({PUBLIC_SANITY_APPVAR})

const dummyIntegration = ({ env }):boolean => {
  console.log('dummyIntegration: env: ' + env)
  return false // satisfy Astro minimally
}

export const appVar = PUBLIC_SANITY_APPVAR
// https://astro.build/config
export default defineConfig({
    integrations: [
        react(),
        dummyIntegration({
            env: PUBLIC_SANITY_APPVAR
        })
    ],
});
