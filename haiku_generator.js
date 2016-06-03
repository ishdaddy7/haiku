var fs = require('fs')
var haiku = require('./haiku');
var input = process.argv[2];
var structure = JSON.parse(input);
var cmudictFile = readCmudictFile('./cmudict.txt')
var dict = haiku.createDictionary(cmudictFile), poem;

function readCmudictFile(file){
	return fs.readFileSync(file).toString();
}


try{
	poem = haiku.createHaiku(structure, dict);
	console.log(poem);
}
catch(err){
	console.log('Bad input! You passed ' + structure + '. Make sure to:\n1) Pass in a string formatted like an array\n2) That is up to 2 dimensions\n3) That has elements no greater than 14\n4) E.g. [1,2,3], or [1,[2,3],4], but not [1,2,[3,[4,5]]]');
}


