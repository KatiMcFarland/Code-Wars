
//Write a function that will convert a string into title case, given an optional list of exceptions (minor words). 
//The list of minor words will be given as a string with each word separated by a space. Your function should ignore 
//the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

function titleCase(title, minorWords) {
  let minorWordsArr, titleArr;
  
  if (minorWords && minorWords !== '') minorWordsArr = minorWords.split(' ');
  else minorWordsArr = [];
  minorWordsArr = minorWordsArr.map(function(word){
    return word.toLowerCase();
  })
  
  if (title === '') return '';
  else titleArr = title.split(' ');
  
  titleArr = titleArr.map(function(word, idx){
    if (idx === 0) return capitalizeFirst(word);
    if (minorWordsArr.includes(word.toLowerCase())) return word.toLowerCase();
    return capitalizeFirst(word);
  });
  
  return titleArr.join(' ');
}

function capitalizeFirst(word){
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
