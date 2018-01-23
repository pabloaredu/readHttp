


function getHTML(input_host,input_path, cb) {

  var https = require('https');


  var requestOptions = {
    host: input_host,
    path: input_path
  };

  https.get(requestOptions, function(response) {
    response.setEncoding('utf8');
    var buffer = '';

    response.on('data', function(data) {
      buffer += data;
    });

    response.on('end', function() {
      cb(buffer);
    });
  });
}

function printHTML (html) {
  console.log(html);
}

// getHTML('sytantris.github.io', '/http-examples/step1.html', printHTML);


// Export function
exports.getHTML = getHTML;
