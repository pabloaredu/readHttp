
var require = require('../http-functions');

// var requestOptions = {
//   host: 'sytantris.github.io',
//   path: '/http-examples/step6/lowercase.html'
// };

// function printHTML (html) {
//   console.log(html);
// }

function printLowerCase (html) {
  console.log(html.toLowerCase());
}

require.getHTML('sytantris.github.io', '/http-examples/step6/lowercase.html', printLowerCase);