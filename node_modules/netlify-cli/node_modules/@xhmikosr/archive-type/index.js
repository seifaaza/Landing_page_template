import fileType from 'file-type';

const exts = new Set([
	'7z',
	'bz2',
	'gz',
	'rar',
	'tar',
	'zip',
	'xz',
	'gz',
]);

// eslint-disable-next-line import/no-anonymous-default-export
export default input => {
	const type = fileType(input);
	return exts.has(type && type.ext) ? type : null;
};
