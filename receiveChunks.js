const fs = require('fs');
const chunkLog = './chunkLog.txt';

let chunkSize;
let data;
let readSoFar = '';

while (chunkSize !== 0) {
  try {
    data = fs.readFileSync(chunkLog).toString();
  } catch(err) {
    err.code === 'ENOENT' ? console.log('') : console.error(err);
  };

  if (typeof(data) === 'string') {
    let chunkBuffer = data.slice(readSoFar.length);
    readSoFar += data;

    const getChunkSize = (hexChunkSize) => {
      const hexToDec = digit => '0123456789ABCDEF'.indexOf(digit);
      const smallDigit = hexToDec(hexChunkSize[1]);
      const largeDigit = hexToDec(hexChunkSize[0]);
      return (smallDigit === -1) ? largeDigit : smallDigit + largeDigit * 16;
    };

    chunkSize = getChunkSize(chunkBuffer.slice(0, 2));

    while (chunkSize !== 0 && chunkBuffer.length > 0) {
      chunkSize = getChunkSize(chunkBuffer.slice(0, 2));

      const CRLF = '\r\n';
      const startI = chunkBuffer.indexOf(CRLF) + CRLF.length;
      const endI = startI + chunkSize;

      console.log(chunkBuffer.slice(startI, endI));
      chunkBuffer = chunkBuffer.slice(endI + CRLF.length);
    }
  }
};
