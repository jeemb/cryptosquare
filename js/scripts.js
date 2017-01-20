//business logic

var formatMessage = function(message) {
  var result = '';
  var counter = 0;
  for (i=0; i < message.length; i++) {
    if (counter === 5) {
      result += ' ';
      counter = 0;
    }
    result += message.charAt(i);
    counter++;
  }

  return result;
};

var encrypt = function(raw) {
  var result = '';
  var simplified = raw.replace(/[^a-z]+/gi, "").toLowerCase();
  var characters = simplified.split("").reverse();
  var numberChar = simplified.length;
  var row = Math.ceil(Math.sqrt(numberChar));
  var col = Math.ceil(numberChar/row);

  var grid = [];
  for (var i = 0; i < col; i++) {
    grid[i] = new Array(row);
  }
  for (var i = 0; i < row; i++) {
    for (var j=0; j < col; j++) {
      grid[j][i] = characters.pop();
    }
  }

  for (var i = 0; i < grid.length; i++) {
    result += grid[i].join("");
  }
  return result;
};

//user interface logic
$(document).ready(function() {
  $("form#encryption").submit(function(event) {
    event.preventDefault();
    var input = $("#phrase").val();
    var output = formatMessage(encrypt(input));

    $("#output p").text(output);
    $("#output").show();
  });
});
