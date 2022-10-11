# Telephone Translator

The Telephone Translator is a Command-Line Interface (CLI) that translates alphanumeric telephone numbers into their corresponding numeric numbers.

It utilizes the following technologies:
- Node.js / NPM 
- TypeScript for typing
- yargs for commands and help menu
- chalk for command-line styling

# Motivation

I developed the Telephone Translator initially as a means to simply determine what a caller should dial when given an alphanumeric telephone number. This was met with the desire to learn more about developing a CLI, as well as creating a package for NPM. 

# Installation 

Make sure to run `npm install` to install all required dependencies.

If you'd instead like to install the package globally, run the following command:

```
npm install -g .
```

# Usage

Before running, make sure to run `npm run compile` to compile the TypeScript code accordingly.

Once compiled, you can then run the following commands: 

`npm run translate <number>`

This command translates a number from alphanumeric to numeric, where `<number>` is the alphanumeric number to translate.

> If installed globally, you can run all script commands prefixed by `translator`, i.e. `translator translate <number>`

# Credits

This CLI was developed largely via following along the following articles, which I found helpful.

[Building a Node.js CLI with TypeScript, packaged and distributed via Homebrew](https://medium.com/geekculture/building-a-node-js-cli-with-typescript-packaged-and-distributed-via-homebrew-15ba2fadcb81)

[Build a Command Line Application with Node.js
](https://developer.okta.com/blog/2019/06/18/command-line-app-with-nodejs)