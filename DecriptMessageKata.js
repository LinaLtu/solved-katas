function decodeMessage(msg) {
  const keyword = "price";
  const numberOfRotChars = 1;

  function isWholeAlphabetChecked(numberOfRotChars) {
    const maxRotation = 26;
    return numberOfRotChars === maxRotation;
  }

  function keywordNotYetFound(decodedMessage, keyword) {
    return decodedMessage.indexOf(keyword) === -1;
  }

  function rotateLettersInMessage(message, numberOfCharactersToBeRotated) {
    let decodedMessage = "";

    for (let i = 0; i < message.length; i++) {
      let letterCode = message.charCodeAt(i);
      let rotatedLetterCode;
      let decodedLetter = "";

      rotatedLetterCode = letterCode + numberOfCharactersToBeRotated;

      if (rotatedLetterCode === 123) {
        decodedLetter = "a";
      } else {
        decodedLetter = String.fromCharCode(rotatedLetterCode);
      }

      decodedMessage += decodedLetter;
    }

    return decodedMessage;
  }

  let decodedMessage = msg;

  while (keywordNotYetFound(decodedMessage, keyword)) {
    decodedMessage = rotateLettersInMessage(decodedMessage, numberOfRotChars);

    if (isWholeAlphabetChecked(numberOfRotChars)) {
      decodedMessage = "Sorry, impossible to decrypt :(";
      break;
    }
  }

  return decodedMessage;
}

console.log(
  decodeMessage(
    "uwtojhygfspwzuykwjxmtxtsrtsifdofszfwdymjsnsymqtbjwuwnhjxytybtitqqfwxfsiknkydhjsyxktwrjinzrxnejiljqfytxfsiymwjjitqqfwxfsiybjsydhjsyxktwqfwljljqfytx"
  )
);
