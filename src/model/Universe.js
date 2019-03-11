const messageDisplayer = require( '../tools/messageDisplayer' );
const RulesSet = require( './RulesSet' )

module.exports = class Universe
{
	constructor( jsonUniverse, jsonRules, howManyGenerations )
	{
		this.universe = this.setUniverse( jsonUniverse );
		this.rules = new RulesSet( jsonRules );
	}

	setUniverse( json )
	{
		messageDisplayer.verbose( 'Setting up universe ...' );

		if ( Array.isArray( json ) )
		{
			( function checkLinesSameLength()
			{
				let lengthFirstLine = json[0].length;

				for( let i = 0; i < json.length; i++ )
				{
					if ( json[ i ].length !== lengthFirstLine )
						messageDisplayer.error( `Length of line ${ i } in your universe file is different from the prious one. Every line of your JSON should have the same length.` )
				}
			})();

			( function checkCellsFormat()
			{
				json.forEach( line =>
				{
					line.forEach( cell =>
					{
						if( ( cell !== 0 ) && ( cell !== 1 ) )
							messageDisplayer.error( 'Your universe file should only contains 0 or 1' )
					})
				})
			})();

			messageDisplayer.verbose( 'Universe set' );
		}
		else
			messageDisplayer.error( 'The universe JSON file you provided needs to be an array, please check out the README explaining it' )
	}

	getNeighbors( posX, posY )
	{
		// TODO + Handle if I'm on a border pretend that there is zeros where there's nothing
	}
}