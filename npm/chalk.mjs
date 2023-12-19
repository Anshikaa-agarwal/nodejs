import chalk from 'chalk';
import validator from 'validator';

console.log(chalk.blue("hello"));
console.log(chalk.bgBlueBright("hello"));
console.log(chalk.bgMagentaBright("hello"));
console.log(chalk.bgMagenta("hello"));
console.log(chalk.italic("hello"));

console.log(validator.isEmail('abcd@hjk.nm'));
console.log(validator.isBoolean("110"));
console.log(chalk.overline("hello"))
console.log(chalk.underline.bgWhiteBright("hello"));

const success = (res) => {
    console.log(chalk.greenBright.inverse(res));
}
success("yayy");