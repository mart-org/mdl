# React dev lib

This is a React library project with TypeScript. The library is located in the `src` folder and contains customizable components that you can use in your React projects.

## Project structure

- `.babelrc`: Babel configuration file to transpile the code.
- `.gitignore`: Configuration file to ignore files and folders in Git.
- `.npmignore`: Configuration file to ignore files and folders in npm.
- `LICENSE`: Project license.
- `package-lock.json`: Dependency lock file for npm.
- `package.json`: npm configuration file that contains the project dependencies.
- `README.md`: This file you are reading.
- `tsconfig.json`: TypeScript configuration file.
- `webpack.config.js`: Webpack configuration file to build the library.

### Rugs

- `interfaces`: Folder containing TypeScript definitions for interfaces and types.
- `src`: Main folder of the library.
  - `index.ts`: Library entry file.
  - `components`: Folder that contains the library components.
    - `index.tsx`: Component input file.
    - `button`: Folder containing a button component.
      - `index.tsx`: Button component definition file.
- `types`: Folder containing TypeScript definitions for the library.

## Configuration and development

1. Open the `package.json` file and update the following information:

   - `"name"`: Name of your library.
   - `"author"`: Your name or the name of your team.
   - `"repository"`: URL of your GitHub repository.
   - `"description"`: A brief description of your library.
   - `"version"`: The initial version of your library.

2. Clone this repository:

```shell
git clone https://github.com/jefferson-lopez-dev/react-dev-lib.git
cd react-dev-lib
```

3. Install dependencies:

```shell
npm installation
```

4. To build the library in development mode, run:

```shell
npm run build
```

This will generate a dist folder with the library files.

## Publishing to npm

If you want to publish your library on npm, follow these steps:

1. Sign in to your npm account:

```shell
login npm
```

2. package and publish the library in npm, run:

```shell
publish npm
```

Note: Make sure you have an npm account and permissions to publish packages.

## Library update

To update your library in npm, follow these steps:

1. Make the necessary changes to your code.

2. Update the library version in package.json.

3. Repeat steps 1 and 2 from the "Publishing to npm" section.

## React-dev-lib repository

You can find the source code for this project at [React-dev-lib](https://github.com/jefferson-lopez-dev/react-dev-lib.git)

Remember to replace `"your-user"` with your GitHub username and make sure you configure your project correctly before publishing it to npm. This is an example of a `README.md` file that you can customize to your needs.
