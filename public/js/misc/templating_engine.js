var inputHTML = "<img src='PLACEHOLDER'>";

function doTemplating(){

  var input = document.getElementById('id_input').value;
  input = filterInput(input);
  var finalHTML = inputHTML.replace("PLACEHOLDER", input);
  console.log(finalHTML);
  alert("Final HTML: " + finalHTML)
  document.write('Your input: </br>' + input);
  document.write(finalHTML);
}

// Removes ' " < >
function filterInput(input){
  return input.replace(/['"<>']/gi, '');
}
