module.exports =
{
	getFileExtensions : file =>
	{
		return file.slice( ( Math.max( 0, file.lastIndexOf( "." ) ) || Infinity ) + 1 );
	}
}