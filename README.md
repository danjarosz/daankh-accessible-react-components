# Daankh Accessible React Components

A package of React Accessible Components and React Accessibility Hooks.

**The package is under construction.**

**Since the version of `0.1.0` this package offers `useGlobalStatesAndProperties` hook and
the documentation page. So, there is a very limited functionality. I'm going to gradually increase the amount of
components and hooks. They will be released under the versions of `0.1.x`**

**This package will be fully-ready, when I release the version of `1.0.0`**

This packages includes a set of React components and React Hooks, that helps to implement accessible applications.

The whole job is based on the given documents:

- [Accessible Rich Internet Applications (WAI-ARIA) 1.2](https://www.w3.org/TR/wai-aria-1.2/)
- [ARIA in HTML](https://w3c.github.io/html-aria/)

## Documentation

[Documentation page](https://daankh-accessible-react-components-documentation.vercel.app/starter-topic.html). This
package is very limited for now, but along implementing new functionalities, the documentation will grow up.

## Deployment

1. Ensure you're logged in your NPM account
   ```
   npm whoami
   ```
2. If you're not authenticated, log on your NPM account:
   ```
   npm login
   ```
3. Remember to do publishing on `main`.
4. On the `dev` branch use the command `npm run format`. Then, push all the changes to the `main` branch.
5. Switch to `main` branch.
6. On the `main` branch, add a changeset
   ```
   npx changeset
   ```
7. On the `main` branch, commit your changes.
8. On the `main` branch, run the `local-release` script
   ```
   npm run local-release
   ```
9. Commit and push all the changes.
10. Congratulations! You're package is released! You can visit a page of your package:

```
https://www.npmjs.com/package/daankh-npm-typescript-package
```

11. Switch to the `dev` branch.
12. Update `dev` with the current changes from `main`.
13. Repeat the development process.

## Licence

This package is released under the MIT licence, but also uses some external packages, thar are released under their own
licences.

The screenshots of licences of each package that I used in this project are located in `licence_screenshots` directory.

A list of packages:

- [React](https://www.npmjs.com/package/react)
- [Typescript](https://www.npmjs.com/package/typescript)
- [@arethetypeswrong/cli](https://www.npmjs.com/package/@arethetypeswrong/cli)
- [@changesets/cli](https://www.npmjs.com/package/@changesets/cli)
- [Prettier](https://www.npmjs.com/package/prettier)
- [Vitest](http://npmjs.com/package/vitest)
- [Storybook](https://www.npmjs.com/package/storybook)
