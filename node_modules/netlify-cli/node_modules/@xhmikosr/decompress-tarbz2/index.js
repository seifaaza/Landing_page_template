import {Buffer} from 'node:buffer';
import decompressTar from '@xhmikosr/decompress-tar';
import fileType from 'file-type';
import {isStream} from 'is-stream';
import seekBzip from 'seek-bzip';
import unbzip2Stream from 'unbzip2-stream';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => input => {
	if (!Buffer.isBuffer(input) && !isStream(input)) {
		return Promise.reject(new TypeError(`Expected a Buffer or Stream, got ${typeof input}`));
	}

	if (Buffer.isBuffer(input) && (!fileType(input) || fileType(input).ext !== 'bz2')) {
		return Promise.resolve([]);
	}

	if (Buffer.isBuffer(input)) {
		return decompressTar()(seekBzip.decode(input));
	}

	return decompressTar()(input.pipe(unbzip2Stream()));
};
