import inquirer from 'inquirer'
import { oraPromise } from 'ora'

import terminalImage from 'terminal-image'
import got from 'got'

import { samuraiAa } from './aas/samuraiAA.js'

const imageAnt2357Url = "https://raw.githubusercontent.com/Ant2357/npm-card-ant2357/main/assets/images/ant2357.jpg";

const questions = [
  "Where are you from?",
  "May I ask your age?",
  "What do you do in your free time?",
  "Which do you like, Vim or Emacs",
  "Can I have a picture of you?"
];
const questionExit = "Exit";

/**
 * CLI終了時に使う汎用テキスト
 * @type {string}
 */
export const exitText = samuraiAa("Bye");

/**
 * Antに関する質問を行い、質問結果を返す
 * @return {string} 質問の答え
 */
export async function askAnt() {
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

  switch (responses.select) {
    case questions[0]:
      return samuraiAa("I'm from Japan");
    case questions[1]:
      return samuraiAa("I plead the fifth");
    case questions[2]:
      return samuraiAa("In my free time, I like to programming");
    case questions[3]:
      return samuraiAa("Vim")
    case questions[4]:
      const body = await oraPromise(got(imageAnt2357Url).buffer());
      return await `${await terminalImage.buffer(body)}\n${samuraiAa("OK")}`;
    case questionExit:
      return exitText;
    default:
      return exitText;
  }
}
