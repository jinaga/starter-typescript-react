# Jinaga Starter Kit for TypeScript

Jinaga runs both on the server and in the browser, so that it can exchange facts between the two.
This starter kit uses Webpack to bundle the client, and `tsc` to compile the server.

Find out more about [Jinaga](https://jinaga.com) and [Webpack](https://webpack.js.org/).

## Installing

The easiest way to use this starter kit is to export it with Subversion.

```bash
svn export https://github.com/jinaga/starter-typescript.git/trunk myapplication
```

If you don't have Subversion installed, then you can go to the [GitHub page](https://github.com/jinaga/starter-typescript) and download it.

Once you have the code, run:

```bash
npm install
```

## Database Setup

Jinaga saves its facts in PostgreSQL.
Create a PostgreSQL database, set up the dev user, and then run the setup script.
The setup script is located in `node_modules/jinaga/setup.sql`.
You can run it from the command line like this:

```bash
psql postgresql://postgres:password@localhost:5432/myapplication -f node_modules/jinaga/setup.sql
```

For complete instructions, see [Jinaga PostgreSQL Setup](https://jinaga.com/documents/getting-started/creating-an-application/postgresql-setup/).

## Building

To build:

```bash
npm run build
```

This creates a `dist` folder with the server-side code in `server.js`, and the client-side code in `scripts/main.js`.

## Running

To run:

```bash
npm start
```

Build something incredible!