
let Events = "";
for (let event of data.events) {
    Events += crearCard(event);
}
  //console.log(Events);

document.querySelector('ul.list-group').innerHTML=Events;