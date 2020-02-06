This is a basic starter-kit that runs a simple express server. Ideally for sandbox and very early prototypes.

## Getting started
- `npm i`
- `npm start`
- `npm-run-all --parallel task1 task2` - runs tasks in parallel
- `-s ` - run in silent mode
- Add your `.env file`

## Adding your own .env
[npm](https://www.npmjs.com/package/dotenv)
create a `.env` file
```
    example:
    PORT=3000
```

Add the following in server code: `require('dotenv').config();` 
or add `node -r dotenv/config app.js` to npm start script

## Updaing packages
See all packages `npm ls`
Review outdated packages with `npm outdated`
