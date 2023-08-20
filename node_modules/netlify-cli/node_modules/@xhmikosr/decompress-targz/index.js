import {Buffer} from 'node:buffer';
import zlib from 'node:zlib';
import decompressTar from '@xhmikosr/decompress-tar';
import fileType from 'file-type';
import {isStream} from 'is-stream';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => input => {
	if (!Buffer.isBuffer(input) && !isStream(input)) {
		return Promise.reject(new TypeError(`Expected a Buffer or Stream, got ${typeof input}`));
	}

	if (Buffer.isBuffer(input) && (!fileType(input) || fileType(input).ext !== 'gz')) {
		return Promise.resolve([]);
	}

	const unzip = zlib.createGunzip();
	const result = decompressTar()(unzip);

	if (Buffer.isBuffer(input)) {
		unzip.end(input);
	} else {
		input.pipe(unzip);
	}

	return result;
};
