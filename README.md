# cavy.app
Documentation for [Cavy](https://github.com/pixielabs/cavy) found on https://cavy.app.

## Running locally

Install dependencies:
```bash
cd website
yarn
```

Run the website with:
```bash
yarn start
```

## Publishing

```bash
cd website
yarn
GIT_USER=<GIT_USER> USE_SSH=true yarn publish-gh-pages
```
