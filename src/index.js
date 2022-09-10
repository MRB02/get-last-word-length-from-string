function getLastWordLength(sentence) {
  let regex = /[^a-z]+$/gi;
  let result = sentence.replace(regex, "");
  let arr = result.split(" ").reverse();
  console.log(arr[0].length);
}

getLastWordLength(
  "I have an interesting book. ...! $$#3 %%% yeah .... global ...##45"
);
