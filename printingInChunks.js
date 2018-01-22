
var https = require('https');

function getAndPrintHTMLChunks() {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function(response) {
    response.setEncoding('utf8');
    var buffer = '';

    response.on('data', function(data) {
      // console.log('Chunk Received. Length: ', data.length);
      buffer += data;
    });

    response.on('end', function() {
      console.log(buffer);
    });
  });

}

getAndPrintHTMLChunks();

// Export function

// exports.getAndPrintHTMLChunks = getAndPrintHTMLChunks;