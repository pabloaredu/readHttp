
var require = require('../http-functions');

// var requestOptions = {
//   host: 'sytantris.github.io',
//   path: '/http-examples/step6/uppercase.html'
// };

// function printHTML (html) {
//   console.log(html);
// }

function printUpperCase (html) {
  console.log(html.toUpperCase());
}

require.getHTML('sytantris.github.io', '/http-examples/step6/uppercase.html', printUpperCase);