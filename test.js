var x = require('./dist/bundle');


var parser = new x.Parser();

console.log(parser.evaluate('3 prn 2').toString());
