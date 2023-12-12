import './style.css'
import 'bootstrap/scss/bootstrap.scss';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

document.addEventListener('DOMContentLoaded', init);
function init()
{
    
  const submit = document.getElementById('submit');
  submit?.addEventListener('click', newEvent)
 const load = document.getElementById('load');
  load?.addEventListener('click', loadUl)
  
}
var eventsArray: string[] = [];

 
function newEvent()
{
    let title = (document.getElementById('title')as HTMLInputElement).value;
    let description = (document.getElementById('description')as HTMLInputElement).value;
    let date =(document.getElementById('date')as HTMLInputElement).value;
    let line = title+" "+description+" "+date;
    eventsArray.push(line);

    let string = JSON.stringify(eventsArray) //JSON típusból stringre konvertál
    localStorage.setItem("lista", string) //Eltárolja lokálisan

    //működik

    document.getElementById('title')!.textContent="";
    document.getElementById('description')!.textContent="";
    document.getElementById('date')!.textContent="";
    console.log(eventsArray);
    
}

    //működik, de csak egy adatot tárol el
function loadUl()
{

  let kiString = localStorage.getItem("lista") //Kiszedi a lokális tárhelyből
  let kiLista;
  if (typeof kiString === 'string') {
    kiLista = JSON.parse(kiString); //Visszakonvertál jsonbe
  }

  const events = document.getElementById('events');
  for (let index = 0; index < kiLista.length; index++)
  {
    console.log(kiLista[index]);
      var newLi = document.createElement('li');
      newLi.textContent=kiLista[index];
      events!.appendChild(newLi);
    
  }
}