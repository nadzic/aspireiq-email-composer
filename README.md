# Email composer

## Vercel hosted

- https://email-composer.vercel.app


## Install deps

```
yarn
```

## Run project

```
yarn start
```

## Run tests

```
yarn test
```

## Project email composer improvements

- extend tests, add more tests jest, rtl;
- add airbnb linter, prettier;
- instead of png, use svg for the icons;
- later if you have more components, you can use storybook (I am using it for my projects) -- for isolated components development, and will add as well some kind of style guide and sharing components in cloud https://bit.dev or locally https://github.com/whitecolor/yalc;
- later if you are planning to use full js/ts stack (CTO told me) I would highly recommend to use Nx https://nx.dev or Lerna https://github.com/lerna/lerna (monorepo management).

## UI/UX improvements

- instead of horizontal scrolling in input field I would maybe rather use multiline (maybe textarea rather than input field) field and add additional values;
- for search I would use instead of "dummy" search -- Algolia, or Elastic Search, you also gain experience of analytics with it, etc.
