#!/usr/bin/env node
import cfonts from 'cfonts'

import { profileCard } from './profileCard.js'
import { askAnt, exitText } from './antCli.js'

import { samuraiAa } from './aas/samuraiAA.js'

async function main() {
  cfonts.say("I Love npm", {
    gradient: "yellow,#55ff55", 
    space: false,
    align: 'center'
  });

  console.log(profileCard);
  console.log(samuraiAa("Hi"));

  while (true) {
    const res = await askAnt();

    console.log(profileCard);
    console.log(res);
    if (res === exitText) {
      return;
    }
  }
}
main();
