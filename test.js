import fs from 'fs';
import path from 'path';
import fileType from 'file-type';
import icojs from 'icojs';
import pify from 'pify';
import test from 'ava';
import m from '.';

test('generate ico', async t => {
	const files = await pify(fs.readdir)(path.join(__dirname, 'fixtures'));
	const arr = await Promise.all(files.map(x => pify(fs.readFile)(path.join(__dirname, 'fixtures', x))));

	t.deepEqual(fileType(await m(arr)), {ext: 'ico', mime: 'image/x-icon'});
});

test('resize option', async t => {
	const file = await pify(fs.readFile)(path.join(__dirname, 'fixtures', '256.png'));
	const sizes = await icojs.parse((await m(file, {resize: true})).buffer);

	for (const x of [16, 24, 32, 48, 64, 128, 256]) {
		t.true(sizes.some(({height, width}) => width === x && height === x));
	}
});
