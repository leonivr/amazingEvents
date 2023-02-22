let Events = "";
for (let event of data.events) {
    let currentDate = new Date(data.currentDate);
    let eventDate = new Date(event.date);
    /*console.log(currentDate);
    console.log(eventDate);
    if (eventDate < currentDate) {
        htmlEvents += crearCard(event);
       console.log('pasado');
    } else {
        htmlEvents += crearCard(event);
        console.log('futuro')
    }*/
    Events += crearCard(event);
}
console.log(Events);

function crearCard(event){
    return `<div class="card">
    <img src="${event.image}" alt="">
    <h3>${event.name}</h3>
    <p>${event.description}</p>
    </div>`
  }