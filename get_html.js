

var https = require('https');

function getHTML(input_host,input_path, cb) {

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

getHTML('sytantris.github.io', '/http-examples/step1.html', printHTML);


// Esta es otra forma de escribir la misma funcon:
// getHTML('sytantris.github.io', '/http-examples/step1.html', function(html){
//   console.log('my other html:', html);
// });

// html = buffer porque en este caso el 3er parametro de mi funcion es cb dado dentro de la otra funcion


// Export function

// exports.getAndPrintHTMLChunks = getAndPrintHTMLChunks;