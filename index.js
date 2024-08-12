#!/usr/bin/env node

const { program } = require('commander');
const inquirer = require('inquirer');
const chalk = require('chalk');
const figlet = require('figlet');
const { Configuration, OpenAIApi } = require('openai');

// ASCII art title
console.log(
  chalk.cyan(
    figlet.textSync('README-CLI', { horizontalLayout: 'full' })
  )
);

program
  .version('1.0.0')
  .description('A CLI tool to generate awesome README files')
  .action(main)
  .parse(process.argv);

async function main() {
  // Main logic here
}

// Run the program
main();