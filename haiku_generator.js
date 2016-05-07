//console.log(module);

function createDictionary(data){
	var lines = data.toString().split('\n'), lineSplit, phoneme, dict = {}, syllCount;
	lines.forEach(function(line){
		lineSplit = line.split("  ");
		phoneme = lineSplit[1]; 
		word = lineSplit[0];
		try{
			syllCount = phoneme.match(/\d/g).length;
		}catch(err){
			syllCount = 0; //some of the words have 0 syllables
		}
		//fill the object, where the keys are the number of syllables and the values are arrays containing the words
		if(dict[syllCount] === undefined){
			dict[syllCount] = [];
			dict[syllCount].push(word); 
		} else{
			dict[syllCount].push(word)
		}
	});
	return dict;
}

/*original simple createHaiku that worked for just an array, not a nested array
function createHaiku(structure, dictionary){
	//console.log(structure);
	var poem = [];
	for (phrase in structure){
		var num = Math.floor(Math.random() * dictionary[structure[phrase]].length)+1;
		poem.push(dictionary[structure[phrase]][num]); 
	}
	return poem.join("\n");
    //console.log("this should log a haiku with the structure " + structure);
}

*/
//new version that probably uses way too many loops... but does accomodate once nested arrays. 
function createHaiku(structure, dictionary){
	var str = [];
	structure.forEach(function(line){
		if(Array.isArray(line)){
			if(structure.indexOf(line) < structure.length-1){
				line.forEach(function(wordSyll){
					var num = Math.floor(Math.random() * dictionary[wordSyll].length)+1;
					//console.log("heyyyyy " + dictionary[wordSyll].length);
					if(line.indexOf(wordSyll) < line.length-1){
						str += dictionary[wordSyll][num] + " ";
					} else{
						str +=  dictionary[wordSyll][num];
					}

				});
			str += "\n";
			} else{
				line.forEach(function(wordSyll){
					var num = Math.floor(Math.random() * dictionary[wordSyll].length)+1;
					if(line.indexOf(wordSyll) < line.length-1){
						str += dictionary[wordSyll][num] + " ";
					} else{
						str +=  dictionary[wordSyll][num];
					}
				});				
			}
		} else{
			var num = Math.floor(Math.random() * dictionary[line].length)+1;
			if(structure.indexOf(line) < structure.length -1){
				str += dictionary[line][num] + "\n";
			} else{
				str += dictionary[line][num] + " ";
			}
		}
	});
	return str;
}

module.exports = {
  createHaiku: createHaiku,
  createDictionary: createDictionary,
};

//if it's just an element, do the old thing. otherwise send it through again