let upcomingEvents = "";

for (let event of data.events) {
    let currentDate = new Date(data.currentDate);
    let eventDate = new Date(event.date);
    if (eventDate > currentDate) {
        upcomingEvents += crearCard(event);
    }
}
//console.log(upcomingEvents);

document.querySelector('ul.list-group').innerHTML=upcomingEvents;