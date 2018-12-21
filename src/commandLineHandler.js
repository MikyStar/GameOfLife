const myArgs = require( 'optimist' ).argv;

const helpText = 	'\n'
					+ 'Launch the Game of Life !' + '\n'
					+ '\n'
					+ '-g or --generations <number> : The number of generations simulated' + '\n'
					+ '-u or --universe <file> : The JSON file describing the universe' + '\n'
					+ '-d or --draw : Maked the program prunt the generations in the console' + '\n' ;

/**
 * @description Handle arguments
 *
 * @returns { Arguments } All the arguments properly parsed
 */
module.exports =
{
	handle : () =>
	{

		if ( ( myArgs.h ) || ( myArgs.help ) )
		{
			module.exports.printHelp();
			process.exit( 0 );
		}

		console.log(myArgs.g || myArgs.generations, "generations");
		console.log(myArgs.u || myArgs.universe, "universe");
		console.log(myArgs.D || myArgs.draw, "draw");

		console.log( 'myArgs: ', myArgs );
	},

	printHelp : () =>
	{
		console.log(helpText);
	}
}

//////////////////////////////////////////////////////////////////////////////////////////

/**
 * @typedef Arguments
 * @property { number } generations
 * @property { boolean } draw
 * @property { file } universe
 */