let pastEvents = "";

for (let event of data.events) {
    let currentDate = new Date(data.currentDate);
    let eventDate = new Date(event.date);
    console.log(eventDate);
    if (eventDate < currentDate) {
        pastEvents += crearCard(event);
        console.log('pasado');
    }else{
        /*console.log("futuro");*/
    }
}
console.log(pastEvents);

function crearCard(event){
    return `<div class="card">
    <img src="${event.image}" alt="">
    <h3>${event.name}</h3>
    <p>${event.description}</p>
    </div>`
  }