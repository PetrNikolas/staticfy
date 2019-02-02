# Staticfy

## 🚀 Quick start

**Start developing.**

  Navigate into your new site’s directory and start it up.

  ```sh
  cd my-site/
  gatsby develop
  ```

**Open the source code and start editing!**

  Your site is now running at `http://localhost:8000`!

  *Note: You'll also see a second link: `http://localhost:8000/___graphql`. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql).*

  Open the `my-site` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside

### Features

- Gatsby
- React/ReasonML
- TypeScript
- Sass, Spectre.css, PostCSS
- TSLint
- Prettier
- Stylelint
- Lint-staged, Husky, Git Hooks

### Project structure

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    ├── README.md
    └── yarn.lock

  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.  

  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

  **`LICENSE`**: Gatsby is licensed under the MIT license.

  **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

  **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

  **`README.md`**: A text file containing useful reference information about your project.

  **`yarn.lock`**: [Yarn](https://yarnpkg.com/) is a package manager alternative to npm. You can use either yarn or npm, though all of the Gatsby docs reference npm.  This file serves essentially the same purpose as `package-lock.json`, just for a different package management system.

## ReasonML

### Usage

Check the docs for [gatsby-plugin-reason](https://github.com/jtberglund/gatsby-plugin-reason) for more details on configuration options.

#### Pages

`gatsby-plugin-reason` offers an option to derive page routes from the page component's name (instead of the file name like gatsby usually uses), which is in use in this starter (see the plugin configuration in [gatsby-config.js](https://github.com/jtberglund/gatsby-starter-reason/blob/master/gatsby-config.js)).

I prefer using this option for two reasons:

ReasonML/ocaml has fairly strict rules for files names since file names automatically map to module names, meaning file names for page components such as `about-me.re` or `404.re` are not allowing.

I like to uppercase my component names and I don't like having two naming conventions going on at once (e.g. having `src/components/Header.re` alongside `src/pages/my_page.re`).

This allows you to create a page component called `AboutMe.re` and map it to the route `/about-me` by setting the name of your component to `"about-me"` as shown below:

```ocaml
let component = ReasonReact.statelessComponent("about-me");
```

### Troubleshooting

If there are issues compiling your ReasonML code and you're sure its not a syntax error, often re-compiling will fix the error

```bash
bsb -clean-world
bsb -make-world
```
