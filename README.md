![Logo](doc/LOGO.png)
<hr>

# Reactron boilerplate

## Main Branches
- **initial:** for initial to start any project, include linting, gulp with unit testing tasks, gulp with eslint
- **master:** for initial a electron-react proyect
- **only-react:** for design UI for app
- **reactron:** for initial a electron-react proyect

## Script Tasks

- **start:** `npm start` Run React
- **dev:** `npm dev` Run React and Electron
- **dist:** `npm run dist` To package in a distributable format
- **realease:** `npm run release` To package and publish in a distributable format
- **quick test:** `npm run quick:test` For testing, before create script in a file with name quick.test.js in root

## Gulp Task

- **default** npm gulp default
- **eslint:src** npm gulp eslint:src
- **quick:eslint** npm gulp quick:eslint
- **eslint:fix** npm gulp eslint:fix
- **eslint:fail** npm gulp eslint:fail
- **eslint:file** npm gulp eslint:file --file ./<PATH_OF_YOUR_FILE>/YOUR_FILE.js --fix
- **eslint:watch** npm gulp eslint:watch
- **eslint:report** npm gulp eslint:report
- **test:simple** npm gulp test:simple
- **test:report** npm gulp test:report

## Prerequisites to publishing (Only Github):

1. Specify repository field in package.json file
```bash
  "repository": {
    "type": "git",
    "url": "git+https://github.com/<usename>/<repository>"
  },
```
2. Change in the field build the information of your repository in package.json file
```bash
  "build": {
    ...
    "publish": [
      {
        "provider": "github",
        "repo": "<repository-name>",
        "owner": "<user-name>",
        "private": false
      }
    ],
    ...
  }
```
3. Create a personal access token [GitHub Access Token](https://github.com/settings/tokens/new)
4. Set the repo scope/permission for access token
5. Create `.env` file
6. Set the access token in `.env` `GH_TOKEN=<new_access_token>`
7. edit asset for you app


## Publishing

If you app (code) have new release and you want publishing follow this steps

1. Create a [Draft a new release](https://help.github.com/en/articles/creating-releases)
2. Set the “Tag version” to the value of version,
**Important** the "Release title" with prefix v, example v1.0.0
3. Save as **draft** not as release
4. Check version field in package.json

## TODO LIST

- [ ] Add autoupdater in main file

## DOCUMENTATION

1. [CHANGELOG](doc/CHANGELOG.md)
1. [CHANGES](doc/CHANGES.md)
2. [HISTORY](doc/HISTORY.md)
3. [LICENSE](doc/LICENSE.md)
3. [NOTICE](doc/NOTICE.md)

