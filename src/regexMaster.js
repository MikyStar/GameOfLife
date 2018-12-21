module.exports =
{
	getFileExtensions : file =>
	{
		return /\.([0-9a-z]+)(?=[?#])|(\.)(?:[\w]+)$/gim.test( file );
	}
}