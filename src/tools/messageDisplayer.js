const chalk = require( 'chalk' );

const helpText = 	'Launch the Game of Life !' + '\n'
					+ '\n'
					+ '-g or --generations <number> : The number of generations simulated' + '\n'
					+ '-u or --universe <file> : The JSON file describing the universe' + '\n'
					+ '-d or --draw : Maked the program prunt the generations in the console';

module.exports =
{
	/**
	 * @description Prints out your text like console.log if the verbose flag has been activated
	 *
	 * @param { string } message Your message
	 */
	verbose : message =>
	{
		if( global.verbose )
		{
			const date = new Date();
			const hour = handleZero( date.getHours() );
			const minutes = handleZero( date.getMinutes() );
			const seconds = handleZero( date.getSeconds() );
			const ms = handleZero( date.getMilliseconds() );

			const timestamp = `[${ hour }:${ minutes }:${ seconds }.${ ms }]`;

			console.log(`${ timestamp } ${ message }`);

			/////////////////////////////////////////////////

			function handleZero( aNumber )
			{
				return ( aNumber < 10 ) ? `0${ aNumber }` : aNumber;
			}
		}
	},

	/**
	 * @description Prints your error in red to stderr and terminate the program
	 *
	 * @param { string } message Your message
	 */
	error : message =>
	{
		console.error(`\n ${chalk.red(message)} \n`);
		process.exit(0);
	},

	/**
	 * @description Prints the help message and terminate the program
	 */
	help : () =>
	{
		console.log(`\n ${helpText} \n`);
		process.exit(0);
	}

	// TODO warn
};