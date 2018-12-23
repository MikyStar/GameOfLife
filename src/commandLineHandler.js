const myArgs = require( 'optimist' ).argv;
const fileSystem = require( 'fs' );

const regex = require( './regexMaster' );
const messageDisplayer = require( './messageDisplayer' );

module.exports =
{
	/**
	* @description Handle arguments
	*
	* @returns { Arguments } All the arguments properly parsed
	*/
	handle : () =>
	{
		if( ( myArgs.help ) || ( myArgs.h ) ) messageDisplayer.help()

		const supposedRulesFile = myArgs.rules || myArgs.r;
		const supposedUniverseFile = myArgs.universe || myArgs.u;

		const arguments =
		{
			action : undefined,
			generations : myArgs.generations || myArgs.g,
			universe : myArgs.universe || myArgs.u,
			draw : myArgs.draw || myArgs.d,
			rules : undefined
		}
		arguments.action = checkAction();
		arguments.rules = checkFile( supposedRulesFile, 'json' );
		arguments.universe = checkFile( supposedUniverseFile, 'json' );

		//////////////////////////////////////////////////////////////////////////////////////////


		function checkFile( filePath, extension )
		{
			const errorMessage = `You must provide a valid ${ extension } file, ${ filePath } is not.`
			if ( filePath )
			{
				if ( fileSystem.existsSync( filePath ) )
				{
					if ( regex.getFileExtensions( filePath ) === extension )
						return `${ filePath }`
					else
						messageDisplayer.error( errorMessage );
				}
				else
					messageDisplayer.error( `${ filePath } doesn't exists` );
			}
			else
				messageDisplayer.error( 'No file provided' )
		}

		function checkAction()
		{
			const action = myArgs._[ 0 ];

			if( ( action === 'generate' ) || ( action === 'analyze' ) )
				return action;
			else
				messageDisplayer.error( `You must provide either 'generate' or analyze as first argument` );
		}
	},
}

//////////////////////////////////////////////////////////////////////////////////////////

/**
 * @typedef Arguments
 * @property { 'generate' | 'analyze' } action
 * @property { number } generations
 * @property { boolean } draw
 * @property { file } universe
 * @property { file } rules
 */