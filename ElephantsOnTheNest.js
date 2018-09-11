function breakTheWeb(strength, lineLength) {
  let currentWeight = 0;
  let elephantCounter = 0;
  let baseWeight = 1000;

  if (strength < baseWeight || lineLength <= 0) {
     return 0;
  }

  function loop() {
    for (let i = 0; i < lineLength; i++) {
      if (currentWeight + baseWeight <= strength) {
        currentWeight += baseWeight;
        elephantCounter++;
      } else {
        break;
      }
    }

    lineLength--;
    baseWeight += 1000;

    if (lineLength === 0) {
    	return elephantCounter;
    }

    if (currentWeight < strength) {
        loop();
    }

    return elephantCounter;
  }

  return loop();
}
