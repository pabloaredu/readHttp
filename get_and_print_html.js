

var https = require('https');

function getAndPrintHTML(input_host,input_path) {


  var requestOptions = {
    host: input_host,
    path: input_path
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

getAndPrintHTML('sytantris.github.io', '/http-examples/step1.html');

// Export function

// exports.getAndPrintHTMLChunks = getAndPrintHTMLChunks;