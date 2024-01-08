import { EventService } from "./main.ts";

const eventService = new EventService();

document.addEventListener("DOMContentLoaded", async () => {
    const eventDiv = document.getElementById("events") as HTMLDivElement;
    eventDiv.textContent = "";
    const events = await eventService.getAll();
  
    const cards = events.map((event) => {
      const divCol = document.createElement("div");
      divCol.className = "col-xl-3 col-md-4 col-sm-6";
  
      const divCard = document.createElement("div");
      divCard.style.backgroundColor="rgb(32, 189, 178)";
      divCard.className = "card";
  
      const divCardBody = document.createElement("div");
      divCardBody.className = "card-body";
  
      const h3 = document.createElement("h3");
      h3.className = "card-title";
      h3.textContent = event.title;
  
      const p = document.createElement("p");
      p.className = "card-text";
      p.textContent = event.description;
  
      const ul = document.createElement("ul");
      ul.className = "list-group list-group-flush";
  
      const liPrice = document.createElement("li");
      liPrice.className = "list-group-item font-weight-bold";
      liPrice.textContent = event.date.toString();
  
      ul.append(liPrice);
      divCardBody.append(h3, p);
      divCard.append(divCardBody, ul);
      divCol.append(divCard);
  
      return divCol;
    });
    eventDiv.append(...cards);
  });