#!/usr/bin/env node
// 参考記事
// https://www.npmjs.com/package/glaucia_lemos86

import chalk from 'chalk'
import boxen from 'boxen'

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
  bluesky: chalk.cyan('https://bsky.app/profile/ant2357.bsky.social'),
  github: chalk.cyan('https://github.com/Ant2357'),
  gmail: chalk.cyan('ryu4979@gmail.com'),
  npx: chalk.white('npx ant2357'),
  labelTwitter: chalk.white.bold('   Twitter:'),
  labelBluesky: chalk.white.bold('   Bluesky:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelGmail: chalk.white.bold('     Gmail:'),
  labelCard: chalk.white.bold('      Card:')
}

const newline = '\n';
const heading = `${data.name} ${data.handle}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const blueskying = `${data.labelBluesky}  ${data.bluesky}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const gmailing = `${data.labelGmail}  ${data.gmail}`;
const carding = `${data.labelCard}  ${data.npx}`;

const output = [
  heading,
  newline,
  twittering,
  blueskying,
  githubing,
  gmailing,
  newline,
  carding,
].join(newline);

export const profileCard = boxen(output, options);
