kidsArray = ["Achilles Bishop Cook","Amalia Margarita Batlle","Amaya Palmira Cofre","Anna Danica Rekeda","Anthony Lucian Kolmer"];

var select1 = document.getElementById("select1");

// populate for the first time
for(var i = 0; i < kidsArray.length; i++)
{
var option = document.createElement("OPTION"),
  txt = document.createTextNode(kidsArray[i]);
option.appendChild(txt);
option.setAttribute("value",kidsArray[i]);
select1.insertBefore(option,select1.lastChild);
} 

// Remove selected kid from an array
document.querySelector("#select1").addEventListener("change", function () {
  var selectedKid = select1.value;
  console.log(selectedKid);
  select1.innerHTML = "";
  removeItemFromArray(kidsArray,selectedKid);
});

function removeItemFromArray(array, n) {
  const newArray = [];

  for ( let i = 0; i < array.length; i++) {
      if(array[i] !== n) {
          newArray.push(array[i]);
      }
  }

  for(var i = 0; i < newArray.length; i++)
  {
  var option = document.createElement("OPTION"),
    txt = document.createTextNode(newArray[i]);
  option.appendChild(txt);
  option.setAttribute("value",newArray[i]);
  select1.insertBefore(option,select1.lastChild);
  } 
  kidsArray = newArray;
  console.log(newArray);
  return newArray;
}

var select2 = document.getElementById("select2");

// populate for the first time
for(var i = 0; i < newArray.length; i++)
{
var option = document.createElement("OPTION"),
  txt = document.createTextNode(newArray[i]);
option.appendChild(txt);
option.setAttribute("value",newArray[i]);
select2.insertBefore(option,select2.lastChild);
} 

// Remove selected kid from an array
document.querySelector("#select2").addEventListener("change", function () {
  var selectedKid = select2.value;
  console.log(selectedKid);
  select2.innerHTML = "";
  removeItemFromArray(kidsArray,selectedKid);
});

function removeItemFromArray(array, n) {
  const newnewArray = [];

  for ( let i = 0; i < array.length; i++) {
      if(array[i] !== n) {
          newArray.push(array[i]);
      }
  }

  for(var i = 0; i < newArray.length; i++)
  {
  var option = document.createElement("OPTION"),
    txt = document.createTextNode(newArray[i]);
  option.appendChild(txt);
  option.setAttribute("value",newArray[i]);
  select2.insertBefore(option,select2.lastChild);
  } 
  newnewArray = newArray;
  console.log(newArray);
  return newArray;
}


var select3 = document.getElementById("select3");
var select4 = document.getElementById("select4");