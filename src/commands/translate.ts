import type { Arguments, CommandBuilder } from "yargs";

const chalk = require("chalk");

import { formatNumber } from "../utils/formatNumber";
import { translateNumber } from "../utils/translateNumber";
import { validateNumber } from "../utils/validateNumber";

type Options = {
  number: string;
};

export const command: string = "translate <number>";
export const desc: string = "Translate alphanumeric number to numeric number";

export const builder: CommandBuilder<Options> = (yargs) =>
  yargs.positional("number", { type: "string", demandOption: true });

export const handler = (argv: Arguments<Options>): void => {
  const { number } = argv;
  if (validateNumber(number)) {
    const translation = `Translating ${number}...\n`;
    process.stdout.write(translation);
    const translatedNumber = translateNumber(number);
    const formattedNumber = formatNumber(translatedNumber);
    process.stdout.write(
      chalk.green(`For ${number}, please dial: ${formattedNumber}`)
    );
    process.exit(0);
  } else {
    process.stdout.write(
      chalk.yellow(
        `The number ${number} is not a valid number to translate. \n`
      )
    );
    process.stdout.write(
      chalk.yellow(`Please enter a valid number to translate.`)
    );
    process.exit(0);
  }
};
