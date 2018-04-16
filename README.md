# HTTP Chunking

Http chunk transfer coding emulator. Encoded chunks from `encodedChunks.js` are written to a text file, `chunkLog.txt`. When new data is written to `chunkLog.txt`, it's read, decoded, and printed to the console.


### Run
To write encoded chunks (emulating sending an http message):
`npm run send-chunks`

To read and decode chunks (emulating receiving an http message):
`npm run receive-chunks`

To send and receive chunks in parallel:
`npm run start`


### Notes
* Only supports reading one message. The script terminates after processing the terminating chunk of a message.
* Does not support header field trailers.
* Chunks are sent 1 second apart to mimic network latency.

### Resources
[RFC 7230, HTTP/1.1 Message Syntax and Routing, Section 4.1. Chunked Transfer Coding](https://tools.ietf.org/html/rfc7230#section-4.1)
The official definition of the protocol for HTTP/1.1 Chunked Transfer Coding.

[Wikipedia: Chunked Transfer Encoding](https://en.wikipedia.org/wiki/Chunked_transfer_encoding)
The Wikipedia article on the subject.
