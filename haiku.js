//console.log("Node starting...");


var fs = require('fs'), haiku = require('./haiku_generator'), argv2 = process.argv[2], structure = [], cmudictFile = readCmudictFile('./cmudict.txt'), dict = haiku.createDictionary(cmudictFile), poem;

function readCmudictFile(file){
	return fs.readFileSync(file).toString();
}


/* attempt at argv, but on hold until you figure out arbitrary structure
if(argv2){
	//extract only numbers from the argument. in case they pass an array, it'll strip out the square brackets and rebuild. 
	var temp = argv2.match(/[0-9]*\/g);
	for (var i = 0; i<temp.length; i++){
		if(+temp[i].match(/\d/) && +temp[i]){
			structure.push(+temp[i]);
			}
	}
} else{ // default if there's no argument passed 
	structure = [3,5,3];
}
*/

structure = [[3,5],1,2,3,[2,2,2]];

poem = haiku.createHaiku(structure, dict);
console.log(poem);


