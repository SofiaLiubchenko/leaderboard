# Leaderboard — mobile mini-game "Гоночки"

## Overview

A web application for displaying the leaderboard of players in the mobile mini-game "Гоночки".  
User data is generated locally, with support for lazy-load and infinite scroll.

Key features:
- Display top players based on race completion time
- Infinite scroll: load 50 users at a time when scrolling
- Virtualized list for smooth performance with 1000+ users
- Row highlighting on click

## Technologies

- React (functional components + Hooks)  
- TypeScript  
- Vite  
- Tailwind CSS  
- FSD (Feature-Sliced Design)  
- Virtualized List (`react-window`)  

## Project Structure (FSD)
```
src
├ app
│   └ App.tsx
├ pages
│   └ leaderboard
├ widgets
│   └ leaderboard
├ entities
│   └ user
├ shared
│   └ config
│   └ enums
```

## Getting started
`npm install` to install all the dependencies defined in a package.json file.

`npm run dev` to start Vite dev server.

## Details
You can manually set constants for users loading time (LOADING_TIME), number of generated users (MAX_USERS_NUMBER) and lazy-load users number (LIMIT) in the `src/shared/config/constants.ts`. User generation occurs in a file `src/entities/user/model/generateUsers.ts`.
