function highest() {
   let may =data.events[0];
   let mayper = (may.assistance/may.capacity)*100;
   for (let i=1;i<data.events.length;i++) {
      let asist = data.events[i].assistance;
      let capac = data.events[i].capacity;
      let percent = (asist/capac)*100;
      if(percent > mayper){
         mayper=percent;
         may=data.events[i];
      }
   }
   console.log(may.name);
   console.log(mayper + "%");
   return `<td id="highest-att">${may.name}</td>`
 }

 document.querySelector('td#highest-att').innerHTML=highest();

 function lowest() {
   let men=data.events[0];
   let menper = (men.assistance/men.capacity)*100;
   for (let i=1;i<data.events.length;i++) {
      let asist = data.events[i].assistance;
      let capac = data.events[i].capacity;
      let percent = (asist/capac)*100;
      if(percent < menper){
         console.log(men.name);
         console.log(men.assistance);
         console.log(men.capacity);
         menper=percent;
         men=data.events[i];
      }
   }
   console.log(men.name);
   console.log(men.assistance);
   console.log(men.capacity);
   console.log(menper);
   return `<td id="lowest-att">${men.name}</td>`
 }

 document.querySelector('td#lowest-att').innerHTML=lowest();

 function largerCapacity() {
   let may=data.events[0];
   for (let i=1;i<data.events.length;i++) {
      if(data.events[i].capacity>may.capacity){
         may=data.events[i];
      }
   }
   //console.log(may.name);
   //console.log(may.capacity);
   return `<td id="capacity">${may.name}</td>`
 }

document.querySelector('td#capacity').innerHTML=largerCapacity();

//console.log(categorias);

let htmlres="";
for(let cat of categorias){
   let revenue = 0;
   for (e of data.events){
      if(e.category == cat){
         revenue += e.price*e.assistance
         //console.log(cat)
         //console.log(revenue)
         //console.log(e.assistance)
         
      }
   }
}
function tableUpcoming(eventList,selector){
   let tableBodyHTML="";
   categorias.forEach(categoria => {
      let filteredEvents = getEventByCategory(eventList, categoria);
      let ingresos = getIngresosUpcoming(filteredEvents);
      console.log("Categoria: "+ categoria)
      console.log("Ingresos: $" + ingresos);
      let porcentajeAsist = getPorcentajeUpcoming(filteredEvents);
      console.log("Porcentaje Asistencia: " + porcentajeAsist + "%");
      tableBodyHTML += `<tr>
      <td>${categoria}</td>
      <td>$${ingresos}</td>
      <td>${porcentajeAsist}%</td>
    </tr>`
   });
   console.log(tableBodyHTML);
   document.getElementById(selector).innerHTML=tableBodyHTML;
   //document.querySelector(selector).innerHTML = tableBodyHTML;
}
tableUpcoming(upcomingList,"upcoming");


function getEventByCategory(events, categoria){
   let EventosporCategoria = [];
   for (let event of events){
      if(event.category == categoria){
         EventosporCategoria.push(event);
      }
   }
   return EventosporCategoria;
}

function getIngresosUpcoming(filteredEvents){
   let ingresos = 0;
   filteredEvents.forEach(evento =>{
      ingresos+=evento.estimate*evento.price;
   });
   return ingresos;
}

function getPorcentajeUpcoming(filteredEvents){
   let percentage;
   let sumaEstimate = 0;
   let sumaCapacity = 0;
   filteredEvents.forEach( evento =>{
      sumaEstimate += evento.estimate;
      sumaCapacity += evento.capacity;
      percentage = Math.round((sumaEstimate/sumaCapacity)*100);
   })
   if(percentage !=undefined){
      return percentage;
   }else{
      return 0;
   }
}


function tablePast(eventList,selector){
   let tableBodyHTML="";
   categorias.forEach(categoria => {
      let filteredEvents = getEventByCategory(eventList, categoria);
      let ingresos = getIngresosPast(filteredEvents);
      console.log("Categoria: "+ categoria)
      console.log("Ingresos: $" + ingresos);
      let porcentajeAsist = getPorcentajePast(filteredEvents);
      console.log("Porcentaje Asistencia: " + porcentajeAsist + "%");
      tableBodyHTML += `<tr>
      <td>${categoria}</td>
      <td>$${ingresos}</td>
      <td>${porcentajeAsist}%</td>
    </tr>`
   });
   console.log(tableBodyHTML);
   document.querySelector(selector).innerHTML = tableBodyHTML;
}
tablePast(pastList,'#past');

function getIngresosPast(filteredEvents){
   let ingresos = 0;
   filteredEvents.forEach(evento =>{
      ingresos+=evento.assistance*evento.price;
   });
   return ingresos;
}

function getPorcentajePast(filteredEvents){
   let percentage;
   let sumaAssistance = 0;
   let sumaCapacity = 0;
   filteredEvents.forEach( evento =>{
      sumaAssistance += evento.assistance;
      sumaCapacity += evento.capacity;
      percentage = Math.round((sumaAssistance/sumaCapacity)*100);
   })
   if(percentage !=undefined){
      return percentage;
   }else{
      return 0;
   }
}