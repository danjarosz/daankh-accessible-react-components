# Daankh Accessible React Components

A package of accessible React components.

**The package under construction. Do not use it!**

**It will be ready, when I release version of `1.0.0`**

## Documentation

Under construction...

## Deployment

1. Ensure you're logged in your NPM account
   ```
   npm whoami
   ```
2. If you're not authenticated, log on your NPM account:
   ```
   npm login
   ```
3. Switch to the `main` branch. Ensure you pushed all the changes from `dev` into `main` branch.
4. On the `main` branch, add a changeset
   ```
   npx changeset
   ```
5. On the `main` branch, commit your changes
6. On the `main` branch, run the `local-release` script
   ```
   npm run local-release
   ```
7. Congratulations! You're package is released! You can visit a page of your package:
   ```
   http://npmjs.com/package/<YOUR-PACKAGE-NAME>
   ```
8. Commit everything on the `main` branch
9. Switch to the `dev` branch.
10. Update `dev` with the current changes from `main`.
11. Repeat the development process.

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
