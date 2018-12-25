const messageDisplayer = require( './messageDisplayer' );

module.exports = class Universe
{
	constructor( jsonUniverse, jsonRules, howManyGenerations )
	{
		this.universe = this.setUniverse( jsonUniverse );
	}

	setUniverse( json )
	{
		messageDisplayer.verbose( 'Setting universe ...' );

		if ( Array.isArray( json ) )
		{
			let lengthFirstLine = json[ 0 ].length;

			( function checkLinesSameLength()
			{
				for( let i = 0; i < json.length; i++ )
				{
					if ( json[ i ].length !== lengthFirstLine )
						messageDisplayer.error( `Length of line ${ i } in your universe file is different from the prious one. Every line of your JSON should have the same length.` )
				}
			})();

			( function checkCellsFormat()
			{
				// TODO Check if there's only 0 and 1 and maybe begin creating the data structure handling areas of interests in the map
			})();

			messageDisplayer.verbose( 'Universe set' );
		}
		else
			messageDisplayer.error( 'The universe JSON file you provided needs to be an array, please check out the README explaining it' )
	}
}