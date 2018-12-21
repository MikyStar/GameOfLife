const chalk = require( 'chalk' );

const helpText = 	'Launch the Game of Life !' + '\n'
					+ '\n'
					+ '-g or --generations <number> : The number of generations simulated' + '\n'
					+ '-u or --universe <file> : The JSON file describing the universe' + '\n'
					+ '-d or --draw : Maked the program prunt the generations in the console';

module.exports =
{
	/**
	 * @description Just prints out your text like console.log
	 *
	 * @param { string } message Your message
	 *
	 * @returns { void } -
	 */
	tell : message =>
	{
		console.log(`\n ${message} \n`);
	},

	/**
	 * @description Prints your error in red and terminate the program
	 *
	 * @param { string } message Your message
	 *
	 * @returns { void } -
	 */
	error : message =>
	{
		console.log(`\n ${chalk.red(message)} \n`);
		process.exit(0);
	},

	/**
	 * @description Prints the help message and terminate the program
	 *
	 * @returns { void } -
	 */
	help : () =>
	{
		console.log(`\n ${helpText} \n`);
		process.exit(0);
	}

	// TODO warn
};