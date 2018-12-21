const myArgs = require( 'optimist' ).argv;
const fileSystem = require( 'fs' );

const regex = require( './regexMaster' );
const messageDisplayer = require( './messageDisplayer' );

/**
 * @description Handle arguments
 *
 * @returns { Arguments } All the arguments properly parsed
 */
module.exports =
{
	handle : () =>
	{
		if( ( myArgs.help ) || ( myArgs.h ) ) messageDisplayer.help()

		const arguments =
		{
			generations : myArgs.generations || myArgs.g,
			universe : myArgs.universe || myArgs.u,
			draw : myArgs.draw || myArgs.d,
			rules : undefined
		}
		arguments.rules = checkRules();

		//////////////////////////////////////////////////////////////////////////////////////////

		function checkRules()
		{
			const supposedFileName = myArgs.rules || myArgs.r;

			if( supposedFileName )
			{
				if( fileSystem.existsSync( supposedFileName ) )
				{
					if( regex.getFileExtensions( supposedFileName ) === '.json' )
						return `${ supposedFileName }`
					else
					{
						messageDisplayer.error( 'You must provide a JSON file as rules' );
					}
				}
				else
				{
					console.log( 'You must provide a valid file as rules argument' );
					process.exit( -1 )
				}
			}
		}
	},
}

//////////////////////////////////////////////////////////////////////////////////////////

/**
 * @typedef Arguments
 * @property { number } generations
 * @property { boolean } draw
 * @property { file } universe
 */