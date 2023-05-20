#!/usr/bin/env node
// 参考記事
// https://www.npmjs.com/package/glaucia_lemos86

import inquirer from 'inquirer'
import cfonts from 'cfonts'
import { oraPromise } from 'ora'

import terminalImage from 'terminal-image'
import got from 'got'

import { profileCard } from './profileCard.js'

const imageAnt2357Url = "https://raw.githubusercontent.com/Ant2357/npm-card-ant2357/main/assets/images/ant2357.jpg";

const newline = '\n';
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

  console.log(profileCard);
  console.log(samuraiAa.replaceAll("text", "Hi"));
  while (true) {

    const questions = [
      "Where are you from?",
      "May I ask your age?",
      "What do you do in your free time?",
      "Which do you like, Vim or Emacs",
      "Can I have a picture of you?"
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
        { name: questions[4] },
        { name: questionExit }
    ]}]);

    console.log(profileCard);
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
      case questions[4]:
        const body = await oraPromise(got(imageAnt2357Url).buffer());
        console.log(await terminalImage.buffer(body));
        console.log(samuraiAa.replaceAll("text", "OK"));
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
