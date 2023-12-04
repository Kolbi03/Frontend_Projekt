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

    //ez szar

    document.getElementById('title')!.textContent="";
    document.getElementById('description')!.textContent="";
    document.getElementById('date')!.textContent="";
    console.log(eventsArray);
    
}

    //ez gecire semmit nem csinál 
function loadUl()
{
  const events = document.getElementById('events');
  for (let index = 0; index < eventsArray.length; index++) 
  {
    console.log(eventsArray[index]);
      var  newLi = document.createElement('li');
      newLi.textContent=eventsArray[index];
      events!.appendChild(newLi);
    
  }
}