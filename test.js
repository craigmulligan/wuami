const test = require('ava');
const wuami = require('./index');
const author = 'Craig Mulligan';

test('wuami', async t => {
	const name = wuami(author);
	t.is(await name, 'Shriekin’ Pupil');
});
