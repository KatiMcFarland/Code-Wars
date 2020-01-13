function generateHashtag (str) {
  let hashtag = "#";
  let words = str.toLowerCase().split(' ');
  words = words.filter((word) => {
    return word.length > 0;
  });
  for (let word of words) {
    word = word[0].toUpperCase() + word.slice(1);
    hashtag += word;
  }
  if (hashtag.length > 140 || hashtag === "#") {
    return false;
  }
  return hashtag;
}
