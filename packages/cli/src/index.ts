#!/usr/bin/env node
import { add, sub } from '@oldfish-yarn/utils';
import chalk from 'chalk';
import { Command } from 'commander';

const program = new Command();

program.name('num-cli').description('两数加减').version('0.0.1');

program
  .command('add')
  .description('加法')
  .argument('a', '第一个数字')
  .argument('b', '第二个数字')
  .action((a: string, b: string) => {
    console.log(chalk.green(`${a} + ${b} = ${add(+a, +b)}`));
  });

program
  .command('sub')
  .description('减法')
  .argument('a', '第一个数字')
  .argument('b', '第二个数字')
  .action((a: string, b: string) => {
    console.log(chalk.cyan(`${a} - ${b} = ${sub(+a, +b)}`));
  });

program.parse();
