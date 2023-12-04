import './style.css'
import 'bootstrap/scss/bootstrap.scss';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

document.addEventListener('DOMContentLoaded', init);

function init()
{
  const submit = document.getElementById('submit');
  submit!.addEventListener('click', newEvent)
}

function newEvent()
{
    let title = (document.getElementById('title')as HTMLInputElement).value;
    let description = (document.getElementById('description')as HTMLInputElement).value;
    let date =(document.getElementById('date')as HTMLInputElement).value;
    let iterance = (document.getElementById('iterance')as HTMLInputElement);

   const events = document.getElementById('events')
  var  newLi = document.createElement('li');
   newLi.textContent= title+" "+description+" "+date+" "+iterance;
   
   
  console.log(title);
   events!.appendChild(newLi);
}