let Events = "";
for (let event of data.events) {
    let currentDate = new Date(data.currentDate);
    let eventDate = new Date(event.date);
    Events += crearCard(event);
}
    console.log(Events);



document.querySelector('ul.list-group').innerHTML=Events;



  /*----------DOM*----------*/
//seleccionar elementos//
  /*let divRedes = document.getElementById("redes");
  //console.log(divRedes);
  console.dir(divRedes);//otra forma

  let items = document.getElementsByClassName("items");
  console.dir(items);
  console.dir(items[0]);

  let inputs = document.getElementsByTagName("input");
  console.log(inputs);


  let primerLink = document.querySelector(".item a");
  console.dir(primerLink);

  let links = document.querySelectorAll(".item a");
  console.dir(links);

  /*insertar contenido*/

  /*metodo formal*/
  /*let nuevoLi = document.createElement('li');
  nuevoLi.classList.add('item');
  let nuevoA=document.createElement('a');
  nuevoA.href="./faq";
  nuevoA.innerHTML="FAQ";
  nuevoLi.appendChild(nuevoA);
  document.querySelector('ul.links').appendChild(nuevoLi);*/

  /*metodo no formal

  let otroli=`<li class = "item">
  <a href="...>"</a>
  </li>`;

  document.querySelector('ul.links').innerHTML+=otroLi;*/