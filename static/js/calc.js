const form = document.getElementById("form").value;
const description = document.getElementById("description").value;
const height = document.getElementById("height").value;
const width = document.getElementById("width").value;
const long = document.getElementById("long").value;
const weight = document.getElementById("weight").value;
const pickupDate = document.getElementById("pickup-date").value;
const email = document.getElementById("email").value;
const phone = document.getElementById("phone").value;

var dataArray = [
  {
    description: description,
    height: height,
    width: width,
    long: long,
    weight: weight,
  },
];

function buildTable(data) {
  var table = document.getElementById("tableData");

  for (var i = 0; i < data.length; i++) {
    var row = `<tr>
      <td>${data[i].description}</td>
      <td>H: ${data[i].height} <br>W: ${data[i].width} <br>L: ${data[i].long}</td>
      <td>Weight: ${data[i].weight} lbs</td>
    </tr>`;

    table.innerHTML += row;
  }
}
form.addEventListener("submit", function (e) {
  e.preventDefault();
  buildTable(dataArray);
});
