async function traerDatos() {
  await fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then(respuesta => respuesta.json())
  .then(json => data=json)
  localStorage.setItem("data", JSON.stringify(data));
}
traerDatos();
let data= localStorage.getItem("data");
//console.log(data);
data = JSON.parse(data);

/*----------categorias----------*/
let categorias = [];

for (let event of data.events) {
  if (!categorias.includes(event.category)) {
    categorias.push(event.category);
  }
}
//console.log(categorias);

let htmlCategorias = "";
categorias.map(cat => {
  htmlCategorias += `<label for="${cat}">
    <input type="checkbox" name="category" id="${cat}" value="${cat}">
    ${cat}
    </label>`
});

function crearCard(event) {
  return `<li class="list-group-item">
    <div class="card" style="width: 18rem;">
        <img src="${event.image}" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title">${event.name}</h5>
          <p class="card-text">${event.description}</p>
          <span>Price: $${event.price}</span>
          <a href="./details.html?id=${event._id}" class="btn btn-primary">Ver más</a>
        </div>
    </div>
</li>`
}

let upcomingList = [];
for (let event of data.events) {
    let currentDate = new Date(data.currentDate);
    let eventDate = new Date(event.date);
    if (eventDate > currentDate) {
        upcomingList.push(event);
    }
}

let pastList = [];
for (let event of data.events) {
    let currentDate = new Date(data.currentDate);
    let eventDate = new Date(event.date);
    if (eventDate < currentDate) {
        pastList.push(event);
    }
}


