function ola(nome){
    console.log(nome)
}

const value = $('p[key="203123"]').text();


var newDiv = $("<div>");

// Add some content to the new <div>
newDiv.text(`${value}`);

// Append the new <div> to an existing element with id="container"
$('#name').append(newDiv);

let table = new DataTable('#myTable');


var newTr = $("<tr>")
var newTd = $("<td>")
newTd.text('99')
newTr.append(newTd)
$('#tbody').append(newTr)


function execute(){
    console.log('executandio')
}