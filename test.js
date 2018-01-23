var require = require('./http-functions');


function printHTML (html) {
  console.log(html);
}

require.getHTML('sytantris.github.io', '/http-examples/step1.html', printHTML);