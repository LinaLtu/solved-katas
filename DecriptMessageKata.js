function decodeMessage(msg) {

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const keyword = "price";
  let decodedMessage = '';
  let numberOfRotChars = 1;

  function isWholeAlphabetChecked() {
    return numberOfRotChars === alphabet.length;
  }

  function KeywordNotYetFount() {
    return decodedMessage.indexOf(keyword) === -1
  }

  function rotateLettersInMessage() {
    for (let i = 0; i < msg.length; i++) {
      let rotatedLetterIndex = alphabet.indexOf(msg[i]) + numberOfRotChars;
      if (rotatedLetterIndex >= alphabet.length) {
        rotatedLetterIndex -= alphabet.length;
      }

      let rotatedLetter = alphabet[rotatedLetterIndex];

       decodedMessage += rotatedLetter;
    }

    return decodedMessage;
  }

  while (KeywordNotYetFount()) {

    decodedMessage = '';

    rotateLettersInMessage();

    console.log('message after rotation:', numberOfRotChars, decodedMessage)

    if (isWholeAlphabetChecked()) {
      decodedMessage = 'Sorry, impossible to decrypt :(';
      break;
    }

    numberOfRotChars++;
  }

  return decodedMessage;
}

console.log(decodeMessage("ikhcxvmutgdknimykxlahluxzbgvhffngbvtmbhgehpxkzxetmhikbvxlurmabkmrixkvxgmhgmnxlwtrtgwkxwnvxfbedlatdxikbvxlurtmextlmhgxwheetk"));
