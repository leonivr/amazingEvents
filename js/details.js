/*-----03/03/2023-----*/
console.log([document]);
const queryString = location.search;
console.log(queryString);
const params = new URLSearchParams(queryString);
const id =params.get("id");
const evento = data.events.find(event => event._id == id);

const cardDetail=document.querySelector("#detalles");
cardDetail.innerHTML=crearDetail(evento);


function crearDetail(event){
    return `<li class="list-group-item">
    <div class="card-detail">
        <img src="${event.image}" class="card-img-top" alt="">
        <div class="card-body details">
          <h5 class="card-title">Name:${event.name}</h5>
          <p class="card-text">Date: ${event.date}</p>
          <p class="card-text">Description: ${event.description}</p>
          <p class="card-text">Category: ${event.category}</p>
          <p class="card-text">Place: ${event.place}</p>
          <p class="card-text">Capacity: ${event.capacity}</p>
          <p class="card-text">Assistance: ${evento.assistance}</p>
          <span>Price: $${event.price}</span>
        </div>
    </div>
</li>`
  }