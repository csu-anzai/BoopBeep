function Deltron(beepName, beepNumber) {
  var thisArray = [];
  for (var i = 0; i < beepNumber + 1; i++) {
    var beeps = i.toString();
    if (i % 3 === 0) {
      thisArray.push('Im sorry, ' + beepName + ', Im afraid I cant do that');
    } else if (beeps.includes('3')) {
      thisArray.push("Im sorry Dave, I'm afraid I cant do that.");
    } else if (beeps.includes('2')) {
      thisArray.push('BOOP!');
    } else if (beeps.includes('1')) {
      thisArray.push('BEEP!');
    } else {
      thisArray.push(i);
    }
  }
    return thisArray;
};
