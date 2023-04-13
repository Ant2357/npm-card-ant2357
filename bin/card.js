#!/usr/bin/env node
// 参考記事
// https://www.npmjs.com/package/glaucia_lemos86

import inquirer from 'inquirer'
import chalk from 'chalk'
import boxen from 'boxen'
import cfonts from 'cfonts'

const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'classic',
  borderColor: 'white'
}

const data = {
  name: chalk.white('Ant2357 /'),
  handle: chalk.cyan('ant2357'),
  twitter: chalk.cyan('https://twitter.com/ant2357'),
  github: chalk.cyan('https://github.com/Ant2357'),
  gmail: chalk.cyan('ryu4979@gmail.com'),
  npx: chalk.white('npx ant2357'),
  labelTwitter: chalk.white.bold('   Twitter:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelGmail: chalk.white.bold('     Gmail:'),
  labelCard: chalk.white.bold('      Card:')
}

const newline = '\n';
const heading = `${data.name} ${data.handle}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const gmailing = `${data.labelGmail}  ${data.gmail}`;
const carding = `${data.labelCard}  ${data.npx}`;

const output = [
  heading,
  newline,
  twittering,
  githubing,
  gmailing,
  newline,
  carding,
].join(newline);

const samuraiAa = [
  "　　　　∧__∧",
  "　　　 （｀･ω･）< text",
  "　　　.ノ^　yヽ、",
  "　　　ヽ,,ﾉ==l ﾉ",
  "　　　　/ 　l |",
  "\"\"\"~\"\"\"\"\"\"~\"\"\"~\"\"\"~\""
].join(newline);

async function main() {
  cfonts.say("I Love npm", {
    gradient: "yellow,#55ff55", 
    space: false
  });

  console.log(boxen(output, options));
  console.log(samuraiAa.replaceAll("text", "Hi"));
  while (true) {

    const questions = [
      "Where are you from?",
      "May I ask your age?",
      "What do you do in your free time?",
      "Which do you like, Vim or Emacs"
    ];
    const questionExit = "Exit";

    const responses = await inquirer.prompt([{
      name: "select",
      message: "Choose a text",
      type: "list",
      choices: [
        { name: questions[0] },
        { name: questions[1] },
        { name: questions[2] },
        { name: questions[3] },
        { name: questionExit}
    ]}]);

    console.log(boxen(output, options));
    switch (responses.select) {
      case questions[0]:
        console.log(samuraiAa.replaceAll("text", "I'm from Japan"));
        break;
      case questions[1]:
        console.log(samuraiAa.replaceAll("text", "I plead the fifth"));
        break;
      case questions[2]:
        console.log(samuraiAa.replaceAll("text", "In my free time, I like to programming"));
        break;
      case questions[3]:
        console.log(samuraiAa.replaceAll("text", "Vim"));
        break;
      case questionExit:
        console.log(samuraiAa.replaceAll("text", "Bye"));
        return;
      default:
        console.log(samuraiAa.replaceAll("text", "Bye"));
        return;
    }

  }
}
main();
