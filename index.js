const cliHandler = require( './src/tools/commandLineHandler' );
const Universe = require( './src/model/Universe' )

const cliArgs = cliHandler.handle();

const universe = new Universe( cliArgs.universe, cliArgs.rules );