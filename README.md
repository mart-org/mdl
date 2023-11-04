# react-dev-lib

React-dev-lib is a tool that allows you to create React libraries quickly and easily. This tool focuses on simplifying the React component development process, allowing you to focus on creating high-quality components instead of dealing with project setup and structure.

## Using React-dev-lib

React-dev-lib takes care of the initial setup and project structure, allowing you to:

- Focus on developing customizable React components.
- Streamline the creation of React libraries for reuse across multiple projects.
- Automate tasks such as the compilation of styles and the generation of documentation.

## How to start

To get started using React-dev-lib, follow these steps:

1. **Clone the Repository**:

Clone the React-dev-lib repository:

```shell
git clone https://github.com/jefferson-lopez-dev/react-dev-lib.git
cd react-dev-lib
```

2. Install Dependencies:

Install the necessary dependencies with the following command:

```shell
npm i
```

3. Component Development:

Develop your customizable components in the src/components directory. React-dev-lib will take care of organizing your project structure and handling compilation tasks automatically.

4. SASS Observer:

To automatically compile styles written in SASS to CSS on every change, you can use SASS watch. Run the following command in a standalone terminal:

```shell
npm run watch-sass
```

This functionality allows you to work efficiently on the appearance of your components.

5. Build in Development Mode:

If you want to build the library in development mode, run:

```shell
npm run build
```

This will generate two folders:

client: Contains files related to the client application, such as an HTML file and a JavaScript file for the client application.

dist: Contains the files compiled and optimized for library distribution, including a JavaScript file that contains the compiled library and is ready to be used in other projects.

6. Render a component:

To render a component in an application, you must first export the component you created in the src/index.ts file. This file is responsible for exposing your components for use.

Then, create a file in the folder app called main.tsx. In this file, import the component you created and use it in your application. Here is an example:

```jsx
import React from "react";
import ReactDOM from "react-dom";
import * as lib from "react-dev-lib";
import { YourComponent } from "../src/index"; // Make sure you import your component here

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
    <>
      <YourComponent
        text="component"
      />
    </>
);

```

In the example above, we imported your custom component from src/index and rendered it both from the React-dev-lib library and locally in the app. Be sure to replace "YourComponent" with the name of your component.

With these steps, you can easily develop, build, and render your React components with React-dev-lib in your applications.

## Publishing to npm

If you want to share your library with other developers through npm, follow these steps:

1. Login to npm:

Log in to your npm account using the following command:

```shell
npm login
```

2. Package and Publish to npm:

Package and publish the library to npm by running:

```shell
npm publish
```

Make sure you have an npm account and the necessary permissions to publish packages.

## Library Update

To update your library in npm, follow these steps:

1. Make the necessary changes to your code.

2. Update the library version in the package.json file.

3. Repeat steps 1 and 2 in the "Publishing to npm" section.

With React-dev-lib, you can build React libraries efficiently and focus on creating high-quality components without worrying about the initial project setup. This tool is ideal for developers who want to speed up their React library development process.

## React-dev-lib repository

You can find the source code for this project at [React-dev-lib](https://github.com/jefferson-lopez-dev/react-dev-lib.git)

Remember to replace `"your-user"` with your GitHub username and make sure you configure your project correctly before publishing it to npm. This is an example of a `README.md` file that you can customize to your needs.
