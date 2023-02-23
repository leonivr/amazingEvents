let pastEvents = "";

for (let event of data.events) {
    let currentDate = new Date(data.currentDate);
    let eventDate = new Date(event.date);
    console.log(eventDate);
    if (eventDate < currentDate) {
        pastEvents += crearCard(event);
        console.log('pasado');
    }
}
console.log(pastEvents);

document.querySelector('ul.list-group').innerHTML=pastEvents;