$(document).ready(function() {
  $("form#enternum").submit(function(event) {
    event.preventDefault();
    var myEntry = $("myEntry").val();
    var matrix = [];
    for (i=0;i<=myEntry;i++) {
      matrix.push(i)


      if (matrix[i].toString().includes("3")) {
        matrix.splice(i,1,"Im sorry, Dave. Im afraid I cant do that.")
      } else if ()
    }
