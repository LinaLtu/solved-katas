function decodeMessage(msg) {
	console.log('trying to decode', msg)

	let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let keyword = "price";
  let decodedMessage = '';
  let numberOfRotChars = 1;

  while (decodedMessage.indexOf(keyword) === -1) {
    decodedMessage = '';

    for (let i = 0; i < msg.length; i++) {
      if (rotatedLetterIndex >= alphabet.length) {
      let rotatedLetterIndex = alphabet.indexOf(msg[i]) + numberOfRotChars;
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
