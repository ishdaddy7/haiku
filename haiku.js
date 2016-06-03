function createDictionary(data){
	//makes an object, where each property represents number of syllables, and the value is an array of words that have that many syllables. 
	var rows = data.toString().split('\n');
	var lineSplit;
	var phoneme;
	var dict = {};
	var syllCount;
	rows.forEach(function(row){
		rowSplit = row.split("  ");
		phoneme = rowSplit[1]; 
		word = rowSplit[0];
		try{
			//count syllables by finding out how many numbers are in the phoneme
			syllCount = phoneme.match(/\d/g).length;
		}catch(err){
			//some of the words have 0 syllables
			syllCount = 0; 
		}
		//fill the object, where the keys are the number of syllables and the values are arrays containing the words
		//the first time you see a syllable count, first create the property with an empty array and immediately fill it with the first word
		if(dict[syllCount] === undefined){
			dict[syllCount] = [];
			dict[syllCount].push(word); 
		} else{
		//every subsequent time you see a word with the same syllable count, push it to the array for its syllable count
			dict[syllCount].push(word)
		}
	});
	return dict;
}


var helper = function(el,index,arr, dictionary, delimiter){
	//the delimiter will be a space when dealing with a nested array element, or a line break if not
	//generate a random number to select one of the words from the dictionary at random
	var num = Math.floor(Math.random() * dictionary[el].length)+1;
	//if it's not the last word in the arr, print the random word and the delimter
	if(arr.indexOf(el) < arr.length-1) return dictionary[el][num] + delimiter;
	//if it's the last word in the arr, just print the word
	else return dictionary[el][num];	
}

//this is a little weird, but hoping my confusing helper function is at least keeping this slightly DRY
//this assumes every element of the structure array is to be one line of the poem. 
//it can only handle one level of nesting, so a) i feel like recursion is in order but just not confident enough to tackle
//but b), for haikus, it seems like one level of nesting is sufficient... so i think this suits the need..
function createHaiku(structure, dictionary){
	var str = '';
	structure.forEach(function(line){
		//if the line is an array
		if(Array.isArray(line)){
			line.forEach(function(numSylls, index, line){
				var delimiter = " ";
				str += helper(numSylls, index, line, dictionary, delimiter);
			});
			if(structure.indexOf(line) < structure.length-1) str += "\n";
		} else{
			var delimiter = "\n";
			str += helper(line,undefined,structure,dictionary,delimiter);
		}
	});
	return str;
}

module.exports = {
  createHaiku: createHaiku,
  createDictionary: createDictionary,
};
