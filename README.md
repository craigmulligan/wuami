# wu-tang name generator
```
npm i wuami
```

```javascript
const wuami = require('./index');

const name = wuami('Craig Mulligan').then(wuName => console.log(wuName)); // Shriekin’ Pupil
```

## Thanks

This is a wrapper around https://github.com/rahulparsani/WuNameAAS, so shout out to [@rahulparsani](https://github.com/rahulparsani) and the og name generators.

## Caveats

```javascript
const name = wuami('Donald Glover').then(wuName => wuName === 'Childish Gambino'); // false
```
