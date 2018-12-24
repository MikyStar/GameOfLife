const cliHandler = require( './src/commandLineHandler' );
const Universe = require( './src/Universe' )

const cliArgs = cliHandler.handle();

const universe = new Universe( cliArgs.universe);