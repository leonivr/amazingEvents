let upcomingEvents = "";

for (let event of data.events) {
    let currentDate = new Date(data.currentDate);
    let eventDate = new Date(event.date);
    console.log(eventDate);
    if (eventDate > currentDate) {
        upcomingEvents += crearCard(event);
        console.log('futuro');
    }else{
        /*console.log("pasado");*/
    }
}
console.log(upcomingEvents);

function crearCard(event){
    return `<div class="card">
    <img src="${event.image}" alt="">
    <h3>${event.name}</h3>
    <p>${event.description}</p>
    </div>`
  }