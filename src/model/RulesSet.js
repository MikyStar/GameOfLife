const messageDisplayer = require( '../tools/messageDisplayer' );

module.exports = class RulesSet
{
	constructor( json )
	{
		this.rules = this.setRules( json );
	}

	setRules( json )
	{
		messageDisplayer.verbose( 'Setting up rules ...' );

		if( ( json.born ) && ( json.die ) && ( Object.keys( json ).length === 2 ) )
		{
			console.log( 'ok' );
		}
		else
			messageDisplayer.error( 'Your rules file should have only two attributes : "born" and "die", check the README for further informations ' )
	}

	shouldDie( jsonNeighbors )
	{
		// TODO
	}

	shouldBorn( jsonNeighbors )
	{
		// TODO
	}
}