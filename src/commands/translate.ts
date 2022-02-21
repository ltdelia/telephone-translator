import type { Arguments, CommandBuilder } from "yargs";
import { translateNumber } from "../utils/translateNumber";

type Options = {
  number: string;
};

export const command: string = "translate <number>";
export const desc: string = "Translate alphanumeric number to numeric number";

export const builder: CommandBuilder<Options> = (yargs) =>
  yargs.positional("number", { type: "string", demandOption: true });

export const handler = (argv: Arguments<Options>): void => {
  const { number } = argv;
  const translation = `Translating ${number}...\n`;
  process.stdout.write(translation);
  const translatedNumber = translateNumber(number);
  process.stdout.write(`For ${number}, please dial: ${translatedNumber}`);
  process.exit(0);
};
