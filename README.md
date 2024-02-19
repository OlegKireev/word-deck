[![Analyses](https://github.com/OlegKireev/word-deck/actions/workflows/analyses.yml/badge.svg)](https://github.com/OlegKireev/word-deck/actions/workflows/analyses.yml)
[![E2E Tests](https://github.com/OlegKireev/word-deck/actions/workflows/tests:e2e.yml/badge.svg)](https://github.com/OlegKireev/word-deck/actions/workflows/tests:e2e.yml)

# Word deck

**The app for learning new words in any language**

## Development

### Scripts

Install dependencies:

```bash
npm install # or yarn
```

In order to run it in development, run:

```bash
npm run dev # or yarn dev
```

In order to do a production build, run:

```bash
npm run build # yarn build
```

There are other scripts as well:

- `prettier:check` - check if all files are formatted according to the rules.
- `lint:check` - check if all files are linted according to the rules.
- `ts:check` - check if all files are typed according to the rules.
- `test:unit` - run unit tests.
- `test:e2e` - run e2e tests.
- `test:e2e:ui` - run e2e tests in UI mode.
- `preview` - boot up local static web server that serves the files from `dist` folder. It's an easy way to check if the production build looks OK in your local environment.
- `https-preview` - is the same as `preview`, but with HTTPS. It's handy for testing your PWA capabilities in your local environment.
- `prepare` - install `husky` and copy the default `env/.shared` file to `.env` file. This script is being run automatically after `npm install` or `yarn`.

### UI-framework

[MUI](https://mui.com/) v5 is used here. `MUI` is a fully-loaded component library, super customizable, and easy to use.

### PWA

Out of the box, it's a `Progressive Web Application`. It can be installed on mobile and desktop devices 🙂, it can work offline, and many more. Check more about PWAs [here](https://web.dev/progressive-web-apps/)

Your users will also be informed about the new version of your app:

### Tests

Tests are a vital part of any project. Sometimes they are boring, sometimes they are hard to write, but they are very important. This setup tries to make the testing process as easy as possible. It contains:

- unit tests
- e2e tests

#### Unit tests

[Vitest](https://vitest.dev/) is used here for unit tests. Check [src/insertIf/insertIf.spec.ts](./src/insertIf/insertIf.spec.ts) for an example. You can run unit tests by running:

```bash
npm run test:unit # or yarn test:unit
```

#### E2E tests

[Playwright](https://playwright.dev/) is used for e2e tests. Check [e2e/](./e2e/) folder to see examples. You can run e2e tests by running:

```bash
npm run test:e2e # or yarn test:e2e
```

If you want to run e2e tests in UI mode, run:

```bash
npm run test:e2e:ui # or yarn test:e2e:ui
```

[playwright.config.ts](./playwright.config.ts) contains the configuration for e2e tests. Currently, it's configured to run tests in `chromium`, `firefox` and `webkit` browsers. You can add more browsers if you want.

### GitHub Actions

There are 2 GitHub Actions workflows:

- [analyses.yml](./.github/workflows/analyses.yml) - runs `prettier`, `eslint`, `ts` checks and unit tests on every push and pull request to `main/master` branch.
- [tests:e2e.yml](./.github/workflows/tests:e2e.yml) - runs e2e tests on every push and pull request to `main/master` branch.

### Environmental variables

Put your environmental variables in the `.env` file (they should be prefixed with `VITE_`) and use them in your code via `import.meta.env.[variable_name]` syntax. `.env` file is not committed to the repository (it's under `.gitignore`), but `env/.shared` is. You can use it as a template. Usually, you will have different `.env` files for different environments (dev, staging, production, etc.), like:

- `env/.shared` - shared variables
- `env/.dev` - dev variables
- `env/.staging` - staging variables
- `env/.production` - production variables

## License

[MIT](./LICENSE)
