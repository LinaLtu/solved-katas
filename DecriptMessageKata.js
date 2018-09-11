function decodeMessage(msg) {

const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const keyword = "price";
  let decodedMessage = '';
  let numberOfRotChars = 1;

  while (decodedMessage.indexOf(keyword) === -1) {
    decodedMessage = '';

    for (let i = 0; i < msg.length; i++) {
      let rotatedLetterIndex = alphabet.indexOf(msg[i]) + numberOfRotChars;
      if (rotatedLetterIndex >= alphabet.length) {
        rotatedLetterIndex -= alphabet.length;
      }

      let rotatedLetter = alphabet[rotatedLetterIndex];

      decodedMessage += rotatedLetter;
    }

    console.log('message after rotation:', numberOfRotChars, decodedMessage)

    if (numberOfRotChars === alphabet.length) {
      decodedMessage = 'Sorry, impossible to decrypt :(';
      break;
    }

    numberOfRotChars++;
  }

  return decodedMessage;
}

console.log(decodeMessage("ikhcxvmutgdknimykxlahluxzbgvhffngbvtmbhgehpxkzxetmhikbvxlurmabkmrixkvxgmhgmnxlwtrtgwkxwnvxfbedlatdxikbvxlurtmextlmhgxwheetk"));
