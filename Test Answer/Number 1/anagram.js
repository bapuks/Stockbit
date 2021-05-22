function Anagram () {
		    var array = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua'];
		    var organized = {};

		    for (var i = 0; i < array.length; i++) {
		        var word = array[i].split('').sort().join('');
		        if (!organized.hasOwnProperty(word)) {
			  organized[word] = [];
		        }
		        organized[word].push(array[i]);
		    }
		    //alert("The result are " + JSON.stringify(organized)); 
		    return JSON.stringify(organized);
		}