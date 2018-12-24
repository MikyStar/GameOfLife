module.exports = class Universe
{
	constructor( jsonUniverse, jsonRules, howManyGenerations )
	{
		this.universe = this.validateJSON( jsonUniverse );
	}

	validateJSON( json )
	{
		if ( Array.isArray( json[ 0 ] ) )
			console.log( 'array' )
		else
			console.log( 'not array' )
	}
}