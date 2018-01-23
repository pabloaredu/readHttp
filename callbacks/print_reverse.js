
var require = require('../http-functions');

// var requestOptions = {
//   host: 'sytantris.github.io',
//   path: '/http-examples/step6/reverse.html'
// };

// function printHTML (html) {
//   console.log(html);
// }

function printReverse (html) {
  var htmlReverse = [];
  for(var i = html.length - 1; i >= 0; i--) {
    htmlReverse.push(html[i]);
  }

  console.log(htmlReverse.join(""));
}

require.getHTML('sytantris.github.io', '/http-examples/step6/reverse.html', printReverse);


// function reverse(array){
//   var arrayReverse = [];
//   for(var i = array.length - 1; i >= 0; i--) {
//    arrayReverse.push(array[i]);
//   } return arrayReverse.join('');
// }