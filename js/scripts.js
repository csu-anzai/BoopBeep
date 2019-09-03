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


function frame(thisArray) {
  thisArray.forEach(function (thisArray) {
    $('ol.zults')append(thisArray + '<br>');
  });
}

function switch(thisArray) {
  thisArray.forEach(function (thisArray) {
    $('ol.zults')prepend(thisArray + '<br>');
  });
}

$(document).ready(function () {
  $('#enternum').submit(function (event) {
    event.preventDefault();
    var entry = parseInt($('user'));
    var name = $('#name').val();
    var thisArray = Deltron(beepName, beepNumber);
    $('ol.zults').empty();
    return(thisArray);
    $('#name').val('');
    $('#user').val('');

$(document).ready(function () {
    $('.switch').submit(function (event) {
    var entry = parseInt($('user'));
    var name = $('#name').val();
    var thisArray = Deltron(beepName, beepNumber);
    $('ol.zults').empty();
    return(thisArray);
    $('#name').val('');
    $('#user').val('');
  });
});
