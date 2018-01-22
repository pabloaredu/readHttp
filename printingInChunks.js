
var https = require('https');

function getAndPrintHTMLChunks() {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function(response) {
    response.setEncoding('utf8');
    var chunk = '';

    response.on('data', function(data) {
      // console.log('Chunk Received. Length: ', data.length);
      console.log(data);
      chunk += data;
    });

    response.on('end', function() {
      // console.log(chunk);
    });
  });

}

getAndPrintHTMLChunks();

// Export function

// exports.getAndPrintHTMLChunks = getAndPrintHTMLChunks;