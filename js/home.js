/*let data= localStorage.getItem("data");
console.log(data);
data = JSON.parse(data);*/


/*----------------------------------------------------------*/ 
//let htmlCategorias ="";
document.querySelector('fieldset').innerHTML=htmlCategorias;
let Events = "";
for (let event of data.events) {
    Events += crearCard(event);
}
//console.log(Events);
document.querySelector('ul.list-group').innerHTML=Events;

let listCategorias = document.querySelectorAll("label input[type='checkbox']");

  listCategorias.forEach(categoria => {
    categoria.onclick= () => {  
      let htmlResultados = "";  
      let catchecked=[];
      for(cates of listCategorias){
        if(cates.checked){
          catchecked.push(cates.value);
        }
      }
      console.log(catchecked);
      if(catchecked.length>0){
        data.events.filter(evento => catchecked.includes(evento.category)).forEach
        ((event) =>{
          htmlResultados+=crearCard(event);
          //console.log(htmlResultados);
          document.querySelector('ul.list-group').innerHTML=htmlResultados;
        });
      }else{
        document.querySelector('ul.list-group').innerHTML=Events;
      }    
    }
  });
  
    /*--SEARCH--*/ 
  
    let btnbusqueda =document.querySelector('.btn.btn-outline-success');
    btnbusqueda.onclick= (e) =>{
      e.preventDefault();
      let cajabusqueda = document.querySelector('.form-control');
      let texto=cajabusqueda.value;
      let html="";
      for(let evento of data.events){
        if((evento.description.toLowerCase().includes(texto.toLowerCase())) || (evento.name.toLowerCase().includes(texto.toLowerCase()))){
          html+=crearCard(evento);
          document.querySelector('ul.list-group').innerHTML=html;
          console.log(evento.name);
          console.log(evento.description);
        }
      }
      if(html==""){
        document.querySelector('.search').innerHTML=`<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">
          <p>Sin resultados, pruebe modificando los filtros</p>
              <svg xmlns="http://www.w3.org/2000/svg" class="input-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                </svg>
          </button>`
      }
    }