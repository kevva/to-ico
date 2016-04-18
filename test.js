import fs from 'fs';
import path from 'path';
import fileType from 'file-type';
import pify from 'pify';
import test from 'ava';
import fn from './';

test(async t => {
	const files = await pify(fs.readdir)(path.join(__dirname, 'fixtures'));
	const arr = await Promise.all(files.map(x => pify(fs.readFile)(path.join(__dirname, 'fixtures', x))));

	t.deepEqual(fileType(await fn(arr)), {ext: 'ico', mime: 'image/x-icon'});
});
