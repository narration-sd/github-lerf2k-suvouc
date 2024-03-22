# compact demo for Astro 4.5 bug report

- app should start automatically, or use `npm run dev` from console

- it's easier to view results if you use the 'Open in new tab' to get a full view - that's the arrow-square at right top, just above the narrow app view...

- things you can see from the dev app:
    - the second card, sorking, showing 'Sanity Clientvar is here'
    - the first card, _not_ working, no env var showing
    - open the console on the New Tab page, and you'll see the failure.
    - note the dummy integration is indeed getting its env value, but only because we used loadEnv, with open prefix settings and dangers, and which crashes any client component which might import one of its values
    
- things you can see by building
    - ctrl-c the dev run in the terminal, then run `npm run build`
    - this will crash, with a short version of the export-import loadEnv vars problem: Vite/Rollup is entirely confused and trying to use a client module as if it's a server module. This gets explosively larger on a real app, but same problem

