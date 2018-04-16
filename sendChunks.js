const fs = require('fs');
const chunks = require('./encodedChunks');
const chunkLog = './chunkLog.txt';

chunks.forEach((chunk, i) => {
  setTimeout(() => {
    fs.appendFile(chunkLog, chunk, (err) => { if (err) throw err; });
  }, 2000*i);
});
