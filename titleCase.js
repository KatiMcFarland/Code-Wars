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